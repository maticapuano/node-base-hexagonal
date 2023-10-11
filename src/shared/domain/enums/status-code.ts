/**
 * @description Enum for HTTP status codes.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @enum {number}
 */
export enum HttpStatusCode {
  /**
   * The request has succeeded.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
   * @type {number}
   **/
  OK = 200,
  /**
   * The request has been fulfilled and resulted in a new resource being created.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
   * @type {number}
   **/
  CREATED = 201,
  /**
   * The server successfully processed the request and is not returning any content.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
   * @type {number}
   **/
  NO_CONTENT = 204,
  /**
   * The server cannot or will not process the request due to an apparent client error.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
   * @type {number}
   **/
  BAD_REQUEST = 400,
  /**
   * The request has not been applied because it lacks valid authentication credentials for the target resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
   * @type {number}
   **/
  UNAUTHORIZED = 401,
  /**
   * The server understood the request but refuses to authorize it.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
   * @type {number}
   **/
  FORBIDDEN = 403,
  /**
   * The requested resource could not be found but may be available in the future.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
   * @type {number}
   **/
  NOT_FOUND = 404,
  /**
   * A request method is not supported for the requested resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
   * @type {number}
   **/
  CONFLICT = 409,
  /**
   * The request was well-formed but was unable to be followed due to semantic errors.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
   * @type {number}
   **/
  UNPROCESSABLE_ENTITY = 422,
  /**
   * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
   * @type {number}
   **/
  INTERNAL_SERVER = 500,
  /**
   * The server either does not recognize the request method, or it lacks the ability to fulfil the request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
   * @type {number}
   **/
  TOO_MANY_REQUESTS = 429,
}
