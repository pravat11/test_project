require('babel-register');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../.env' });

const dbConfig = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  migrations: {
    directoryName: './migrations',
    tableName: 'migrations'
  },
  seed: {
    directory: './seeds'
  }
};

module.exports = dbConfig;
