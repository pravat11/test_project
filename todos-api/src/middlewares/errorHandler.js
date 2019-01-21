import logger from '../utils/logger';
import buildError from '../utils/buildError';

export default function genericErrorHandler(err, req, res, next) {
  if (err.stack) {
    logger.error('Error stack trace:', err.stack);
  }

  console.log(err);

  const error = buildError(err);

  res.status(error.code).json(error);
}
