class CustomError extends Error {
  constructor(message, statusCode, details) {
    super(message);

    this.statusCode = statusCode;
    this.details = details;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
