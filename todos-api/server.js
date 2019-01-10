import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './src/routes';

dotenv.config();

const APP_PORT = 8848;

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(APP_PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server started on port ${APP_PORT}`);
});
