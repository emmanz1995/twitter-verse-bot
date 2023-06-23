import * as mongoose from 'mongoose';

class Database {
  private static instance: Database;

  private constructor() {
    const options: mongoose.ConnectOptions = {
      dbName: 'scripture-db'
    }
    mongoose.connect('mongodb://root:rootpassword@localhost:27017', options).then(() => {
      console.log('Connected to MongoDB');
    }).catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  }


  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

export { Database }