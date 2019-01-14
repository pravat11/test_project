import winston, { format } from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: 'debug'
    }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

export default logger;
