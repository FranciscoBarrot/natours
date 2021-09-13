module.exports = class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // fail es para los errores como 400 o 404, mientras que error es en el caso del error 500, internal errr
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    // esto hace que el constructor no aparezca en el stackTrace
    Error.captureStackTrace(this, this.constructor);
  }
};
