import dotenv from 'dotenv';
import User from '../models/User';
import mongoose from 'mongoose';

dotenv.config();

const insertUsers = async (): Promise<void> => {
  const mongoURI = process.env.MONGODB_URI || '';

  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB for inserting users');

    const users = [
      { name: 'Alice', email: 'alice@gmail.com', age: 28 },
      { name: 'Bob', email: 'bob@gmail.com', age: 34 },
      { name: 'Charlie', email: 'charlie@gmail.com', age: 25 },
    ];

    await User.insertMany(users);
    console.log('Users inserted successfully');
  } catch (err) {
    console.error('Error inserting users:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Only run if this is the main module
if (require.main === module) {
  insertUsers();
}
