import HttpStatusCodes from 'http-status-codes';

import CustomError from './CustomError';
import NotFoundError from './NotFoundError';
import BadRequestError from './BadRequestError';

export default function buildError(err) {
  if (err.joi) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
      message: HttpStatusCodes.getStatusText(HttpStatusCodes.BAD_REQUEST),
      details: err.details
    };
  }

  const isCustomError = err instanceof CustomError || err instanceof BadRequestError || err instanceof NotFoundError;

  if (isCustomError) {
    return {
      code: err.statusCode,
      message: err.message,
      details: err.details
    };
  }

  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR)
  };
}
