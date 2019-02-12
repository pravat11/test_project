import HttpStatusCodes from 'http-status-codes';

import CustomError from './CustomError';

class NotFoundError extends CustomError {
  constructor(details) {
    super(HttpStatusCodes.getStatusText(HttpStatusCodes.NOT_FOUND), HttpStatusCodes.NOT_FOUND, details);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export default NotFoundError;
