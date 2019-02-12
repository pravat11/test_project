import mongoose from 'mongoose';

const URL = 'mongodb://localhost/eCommerceDB';

console.log('Connecting to the database....');

mongoose.connect(URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log('Cannot connect to the database:', err);
    throw err;
  }

  console.log('Connected to the database');
});

export default mongoose;
