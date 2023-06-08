import * as mongoose from 'mongoose';

class MongoDB {
  private static instance: MongoDB;
  private constructor() {
    mongoose.connect('mongodb://root:rootpassword@localhost:27017', { dbName: 'bible-verses-db' } as mongoose.ConnectOptions).then(() => {
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