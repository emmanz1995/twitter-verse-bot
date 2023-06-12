import * as mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class MongoDB {
  private static instance: MongoDB;
  private constructor() {
    try {
      mongoose.connect(`${process.env.DB_URI}`, {
        dbName: 'bible-verses-db',
      } as mongoose.ConnectOptions);
      console.log('Successfully connected to DB!');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }

  public static getInstance(): MongoDB {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
    }
    return MongoDB.instance;
  }
}

export default MongoDB;
