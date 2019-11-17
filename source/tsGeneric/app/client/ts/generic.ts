import { def, log } from 'log';

def('generic');
// ------------------------------
// простой пример
function gnGet<T>(a: T): T {
    return a;
}

log('gnGet typing   ', gnGet<string>('text'));
log('gnGet notyping ', gnGet('text'));
// ------------------------------
// пример использования нескольких общих типов
function gnGet2<T, U>(a: T, b: U, c: U): U {
    if (typeof a === 'string') { return b; }
    return c;
}

log('gnGet2 ', gnGet2('text', true, false));

// ------------------------------
// ограничение
interface ILength{
    length: number;
}
class TLength {
    public length: number;

    public constructor() {
        this.length = 333;
    }
}
function gnGet3<T extends ILength>(a: T): number {
    return a.length;
}
const ar: number[] = [1, 23, 4, 6, 3, 5];
const str = 'qwdqwdjhgwjh';
const len: TLength = new TLength();
// const num = 10;

log('length of ', typeof ar, gnGet3(ar));
log('length of ', typeof str, gnGet3(str));
// log('length of ', typeof num, gnGet3(num));
log('length of ', typeof len, gnGet3(len));
// ------------------------------

interface IItem{
    name: string;
    fam: string;
    age: number;
}
interface IItem2{
    id: number;
    user: IItem;

}
function getBy<T, P extends keyof T>(list: T[], param: P, val: T[P]): T[] {
    return list.filter(it => it[param] === val);
}


const list: IItem[] = [
    { name: 'Mike', fam: 'Naum', age: 10 },
    { name: 'Mode', fam: 'Storm', age: 20 },
    { name: 'Luke', fam: 'Sky', age: 20 },

];

const list2: IItem2[] = [
    { id: 0, user: list[0] },
    { id: 1, user: list[1] },
];
list[1].name = 'ttt';

log('name', getBy(list, 'name', 'ttt'));
log('age', getBy(list, 'age', 20));

log('id', getBy(list2, 'id', 1));

// ------------------------------
interface IType<T>{
    value: T;
    func(): void;
}

function doType<T extends IType<U>, U>(obj: T): void{
    obj.func();
}

class TTypeA implements IType<string> {
    public value: string = 'qwejhdjkwq';

    public func(): void {
        log('TTypeA', typeof (this.value), this.value);
    }
}

class TTypeB implements IType<object> {
    public value: {
        a: string;
        b: string;
    };

    public constructor() {
        this.value = {
            a: 'property a',
            b: 'property b',
        };
    }

    public func(): void {
        log('TTypeA', typeof (this.value), this.value);
    }
}
const typeA = new TTypeA();
doType(typeA);
const typeB = new TTypeB();
doType(typeB);


// ------------------------------
