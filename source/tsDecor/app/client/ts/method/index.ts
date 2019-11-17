import { def, log } from 'log';
import error from './decorator';

def('method decorator');


class TClass {
    public res: number;

    @error
    public method(a: number, b: number): number | void {
        if (b === 0) {
            throw Error('b is 0');
        }

        this.res = a / b;
        return this.res;
    }
}

const m = new TClass();
const res = m.method(10, 0);
log('res:', res);
