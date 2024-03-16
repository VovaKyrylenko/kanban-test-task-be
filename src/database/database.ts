import mongoose from 'mongoose';

const { DB_URL } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
