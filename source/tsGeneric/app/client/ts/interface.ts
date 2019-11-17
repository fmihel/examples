import { def, log } from 'log';

def('interface');

interface IFirst{
    name: string;
    fam: string;
    age: number;
}
// ------------------------------
const first: IFirst = {
    age: 10,
    fam: 'Naum',
    name: 'strong',
};

// first.age = 10;
// first.fam = 'Naumenko';
// first.name = 'Mike';

log('first', first);
// ------------------------------

interface IHaveFunc{
    text: string;
    func(a: number, b: number): string;
    func2: (a: string) => number;
}

class THave implements IHaveFunc {
    public text: string;

    public constructor() {
        this.text = 'Have ';
    }

    public func(a: number, b: number): string {
        return this.text + a.toString() + b.toString();
    }

    public func2(a: string): number {
        return a.length + this.text.length;
    }
}

const have: THave = new THave();

log(have.text);

// ------------------------------
interface IInfo{
    info: () => void;
}
interface IFunc {
    name: string;
    clear: () => void;
}
class TFunc implements IFunc, IInfo {
    public name: string;

    public clear(): void {
        this.name = '';
    }

    public info(): void{
        log('info Name:', this.Name);
    }

    public set Name(v: string) {
        this.name = v;
    }

    public get Name(): string {
        return this.name;
    }
}

function fn(func: IFunc): void {
    log('IFunc.name', func.name);
}
function info(func: IInfo): void {
    func.info();
}
const func: TFunc = new TFunc();
func.Name = '10';
fn(func);
info(func);
