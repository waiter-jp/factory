/**
 * errors
 */
import { ArgumentError as Argument } from './error/argument';
import { ArgumentNullError as ArgumentNull } from './error/argumentNull';
import { ForbiddenError as Forbidden } from './error/forbidden';
import { NotFoundError as NotFound } from './error/notFound';
import { RateLimitExceededError as RateLimitExceeded } from './error/rateLimitExceeded';
import { ServiceUnavailableError as ServiceUnavailable } from './error/serviceUnavailable';
import { UnauthorizedError as Unauthorized } from './error/unauthorized';
import { WaiterError as Waiter } from './error/waiter';

export {
    Argument,
    ArgumentNull,
    Forbidden,
    NotFound,
    RateLimitExceeded,
    ServiceUnavailable,
    Unauthorized,
    Waiter
};
