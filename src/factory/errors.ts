/**
 * errors
 */
import Argument from './error/argument';
import ArgumentNull from './error/argumentNull';
import Forbidden from './error/forbidden';
import NotFound from './error/notFound';
import RateLimitExceeded from './error/rateLimitExceeded';
import ServiceUnavailable from './error/serviceUnavailable';
import { WaiterError as Waiter } from './error/waiter';
export {
    Argument,
    ArgumentNull,
    Forbidden,
    NotFound,
    RateLimitExceeded,
    ServiceUnavailable,
    Waiter
};
