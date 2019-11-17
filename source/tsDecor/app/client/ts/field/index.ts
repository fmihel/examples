import { def, log } from 'log';
import OnChange from './decorator';

def('field decorator');


class TField {
    // / @OnChange('onFieldChange')
    @OnChange('onFieldChange')
    public res: number;

    public constructor(res: number = 10) {
        log('constructor res:', this.res);
        this.res = res;
    }

    public onFieldChange(self: TField, oldVal: number, newVal: number): void {
        log('this', this, 'self', self);
    }

    public info(): void {
        log('res:', this.res);
    }
}


const m = new TField(15);
m.info();
const n = new TField(12);
n.info();
m.info();
