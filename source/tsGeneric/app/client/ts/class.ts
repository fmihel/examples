import { def, log } from 'log';


def('class');
class TClass {
    public num: string;

    private infos: string;

    public constructor(oNum: string) {
        this.num = oNum;
        this.infos = 'TClass';
    }

    public get Info(): string {
        return this.infos;
    }

    public set Info(str: string) {
        this.infos = str;
    }

    public info(): void {
        log('info class', this.Info);
    }
}

const c = new TClass('oNum string');
log('class:', c);
