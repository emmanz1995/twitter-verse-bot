import { ScriptureRepository } from '../port/adapter/ScriptureRepository';
import { BibleRepository } from '../port/adapter/BibleRepository';
import {
  ScriptureEntity
} from '../../adapter/driven/repository/db/mongo/bibleverse/ScriptureMongoEntity';
import { BibleStatisticRepository } from '../port/adapter/BibleStatisticRepository';
import { SyncScriptureUsecase } from '../port/usecase/SyncScriptureUsecase';
import { Scripture } from '../../domain/model/Scripture';
import { BibleApiMapper } from '../../adapter/driven/repository/apiclient/bibleapi/mapper/BibleApiMapper';
import { ScriptureMapper } from '../../domain/model/mapper/ScriptureMapper';

class SyncScriptureUsecaseImpl implements SyncScriptureUsecase {
  private readonly scriptureRepository: ScriptureRepository
  private readonly bibleRepository: BibleRepository
  private readonly bibleStatisticRepository: BibleStatisticRepository
  constructor(
    scriptureRepository: ScriptureRepository,
    bibleRepository: BibleRepository,
    bibleStatisticRepository: BibleStatisticRepository
  ) {
    this.scriptureRepository = scriptureRepository
    this.bibleRepository = bibleRepository
    this.bibleStatisticRepository = bibleStatisticRepository
  }

  async invoke(): Promise<void> {
    const statistics = this.bibleStatisticRepository.getAll()
    const processVersePromises = statistics.map((statistic) => this.processVerses(statistic.book, statistic.chapter));
    await Promise.all(processVersePromises);
    console.log("Completed Syncing Scriptures");
  }

  async processVerses(book: String, chapter: number): Promise<void> {
      try {
        const references = await this.bibleRepository.getVerses(book, chapter);
        console.log("Book:", book, "Chapter:", chapter);
        const scriptures: Scripture[] = references.verses.map(verse => ScriptureMapper.toDomain(verse));
        await this.scriptureRepository.save(scriptures);
      } catch (error) {
        console.error("Error retrieving or saving scriptures for Book: ", book, "chapter: ", chapter, "error: ", error);
      }
  }
}

export { SyncScriptureUsecaseImpl };
