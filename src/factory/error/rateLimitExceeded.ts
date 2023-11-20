// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { WaiterError } from './waiter';

/**
 * RateLimitExceededError
 */
export class RateLimitExceededError extends WaiterError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.RateLimitExceeded, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
