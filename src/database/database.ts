import mongoose from 'mongoose';
require('dotenv').config();
const { DB_URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
