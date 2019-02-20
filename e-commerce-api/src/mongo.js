import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const URL = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

console.log('Connecting to the database....');

mongoose.connect(URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log(`${err.name}: Cannot connect to the database. Please check if the database is up and running`);

    return;
  }

  console.log('Connected to the database');
});

export default mongoose;
