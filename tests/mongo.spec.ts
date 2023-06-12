import MongoDB from '../src/config/mongo';
import * as mongoose from 'mongoose';

jest.mock('mongoose');

describe('desc', () => {
  const logSpy = jest.spyOn(console, 'log');
  it('test', async () => {
    MongoDB.getInstance()
    expect(mongoose.connect).toHaveBeenCalledWith(
      'mongodb://root:rootpassword@localhost:27017', {
        dbName: 'bible-verses-db'
      }
    );
    expect(mongoose.connect).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Successfully connected to DB!');
  });
});