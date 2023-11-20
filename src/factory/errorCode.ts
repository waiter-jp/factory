/**
 * エラーコード
 */
enum ErrorCode {
    AlreadyInUse = 'AlreadyInUse',
    Argument = 'Argument',
    ArgumentNull = 'ArgumentNull',
    Forbidden = 'Forbidden',
    NotFound = 'NotFound',
    NotImplemented = 'NotImplemented',
    ServiceUnavailable = 'ServiceUnavailable',
    RateLimitExceeded = 'RateLimitExceeded',
    Unauthorized = 'Unauthorized'
}
export default ErrorCode;
