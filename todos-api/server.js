import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './src/routes';
import logger from './src/utils/logger';

dotenv.config();

const APP_PORT = 8848;

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(APP_PORT, err => {
  if (err) {
    throw err;
  }

  logger.info(`Server started on port ${APP_PORT}`);
});
