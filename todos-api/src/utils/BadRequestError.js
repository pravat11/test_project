import HttpStatusCodes from 'http-status-codes';

import CustomError from './CustomError';

class BadRequestError extends CustomError {
  constructor(details) {
    super(HttpStatusCodes.getStatusText(HttpStatusCodes.BAD_REQUEST), HttpStatusCodes.BAD_REQUEST, details);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export default BadRequestError;
