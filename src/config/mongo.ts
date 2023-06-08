import * as mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

class MongoDB {
  private static instance: MongoDB;
  private constructor() {
    mongoose.connect(`${process.env.DB_URI}`, { dbName: 'bible-verses-db' } as mongoose.ConnectOptions).then(() => {
      console.log('Successfully connected to DB!');
    }, (err: Error) => {
      console.log(`Failed to connect here why: ${err}`);
    })
  }

  public static getInstance(): MongoDB {
    if(!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
    }
    return MongoDB.instance;
  }
}

export default MongoDB;