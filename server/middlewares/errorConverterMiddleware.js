const expressValidation = require('express-validation');
const HttpError = require('./HttpError');
const httpStatus = require('http-status');

/**
 * Try to convert all errors in the pipe to a common
 * interface aiming for better manipulation
 * If error is not an instanceOf HttpError, convert it.
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const errorConverter = (err, req, res, next) => {
  let error = Object.assign(err);

  let status = err.status || httpStatus.INTERNAL_SERVER_ERROR;

  // Check for axios error since it swallows the real error code
  // of the request
  if (err.response) {
    err.message = `${err.message} ${err.response.data.message}`;
    status = err.response.status;
    err.code = `${err.response.data.code}`;
  }
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map((error) => error.messages.join('. ')).join(' and ');
    error = new HttpError(unifiedErrorMessage, status, true);
    return res.status(error.status).json(error);
  } else if (!(err instanceof HttpError)) {
    error = new HttpError(err.message, status, err.isPublic, err.code);
  }
  return res.status(error.status).json({ ...error, message: error.message });
};

module.exports = errorConverter;
