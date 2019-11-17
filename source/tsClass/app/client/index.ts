import log from 'utils/log';
import { TClass, IInfo } from './src/class';

class TChild extends TClass {
    public bool: boolean = false;

    public constructor(aCount: number = 20) {
        super(aCount);
        this.bool = (this.Count > 10);
    }

    public createInfo(): IInfo[] {
        const info = super.createInfo();
        info.push({ name: 'bool', value: this.bool ? 'true' : 'false' });
        return info;
    }
}


function tsOut(s: string): void {
    log(`out in: ${s}`);
}

const cls = new TChild(3);
cls.info();

tsOut('my code..');
