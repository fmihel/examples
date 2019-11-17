/**
 * Простой пример, и как мне кажется самый расппростроненый случай использования декоратора,
 * навесить обертку на метод класса
 */

import { def, log } from 'log';

def('simple decorator');
// изменяем свйство доступа
function deReadOnly(tar: object, prop: string, desc: TypedPropertyDescriptor<any>): any {
    const d: TypedPropertyDescriptor<any> = desc;

    d.writable = false;
    return d;
}

function deOnCall(tar: object, prop: string, desc: PropertyDescriptor): any {
    const d: PropertyDescriptor = desc;
    const old = desc.value;
    d.value = function (...a: any) {
        log('replace ', a);
        return old.call(this, ...a);
    };

    return d;
}
// использование параметров
function deCase(param: string = 'case'): any {
    return function (tar: object, prop: string, desc: PropertyDescriptor) {
        const d = desc;
        const old = d.value;
        d.value = function (a: string) {
            let s = a;
            s = param;
            return old.call(this, s);
        };
    };
}


class TUser {
    public name: string;


    public constructor(name: string = 'noname') {
        this.name = name;
    }

    @deCase('torry')
    @deReadOnly
    @deOnCall
    public Name(mean: string = 'clear'): string {
        this.name = mean;
        return this.name;
    }
}


const u = new TUser();
const s = u.Name();
log('Name():', s);
