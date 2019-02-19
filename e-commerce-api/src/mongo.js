import mongoose from 'mongoose';

const URL = 'mongodb://localhost/eCommerceDB';

console.log('Connecting to the database....');

mongoose.connect(URL, { useNewUrlParser: true }, err => {
  if (err) {
    console.log(`${err.name}: Cannot connect to the database. Please check if the database is up and running`);

    return;
  }

  console.log('Connected to the database');
});

export default mongoose;
