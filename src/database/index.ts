import mongoose from 'mongoose';
import heroModule from './../models/hero';

export const connectDB = () => {
  const dbOptions = {
    user: process.env.MONGODB_USER || '',
    pass: process.env.MONGODB_PASS || '',
    useNewUrlParser: true,
    authSource: 'admin',
  };

  const URI = `mongodb://${process.env.MONGODB_URI}/${process.env.DB_NAME}`;

  mongoose.connect(URI, dbOptions);

  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  mongoose.connection.on('error', (error) => {
    console.log(`mongodb connection error: ${error.message}`);
  });
  mongoose.connection.once('open', () => {
    heroModule;
  });
};
