import { ErrorCode } from '../errorCode';

/**
 * WaiterError
 */
export class WaiterError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;

        this.name = 'WaiterError';
        this.reason = code;
    }
}
