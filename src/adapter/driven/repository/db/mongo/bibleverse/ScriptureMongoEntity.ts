import { Model } from 'mongoose';

interface ScriptureIdentifierEntity {
  bookName: String;
  chapter: Number;
  verse: Number;
}

interface ScriptureEntity {
  _id: ScriptureIdentifierEntity;
  text: string;
}

const scriptureEntityModel = {
  _id: {
    bookName: {
      type: String,
        required: true
    },
    chapter: {
      type: Number,
        required: true
    },
    verse: {
      type: Number,
        required: true
    }
  },
  text: {
    type: String,
      required: true
  },
}

interface IScriptureModel extends Model<ScriptureEntity> {}


export { ScriptureIdentifierEntity, ScriptureEntity, IScriptureModel, scriptureEntityModel };