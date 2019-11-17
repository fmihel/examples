import { def, log } from 'log';


def('method decorator');

function deLimit(tar: object, prop: string, desc: PropertyDescriptor): any {
    const d: PropertyDescriptor = desc;
    const old = d.value;
    d.value = function (name: string, age: number) {
        if (age < 0) { throw new Error('Abnormal age'); } else { old.call(this, name, age); }
    };
    return d;
}

function deFormat(tar: object, prop: string, desc: PropertyDescriptor): any {
    const d: PropertyDescriptor = desc;
    const old = d.value;
    d.value = function (name: string, age: number) {
        old.call(this, name.toUpperCase(), age);
    };
    return d;
}

function deOut(tar: object, prop: string, desc: PropertyDescriptor): any {
    const d: PropertyDescriptor = desc;
    const old = d.value;
    d.value = function (name: string, age: number) {
        old.call(this, name, age);
        (tar as User).info();
    };
    return d;
}

function deError(tar: object, prop: string, desc: PropertyDescriptor): any {
    const d: PropertyDescriptor = desc;
    const old = d.value;
    d.value = function (name: string, age: number) {
        try {
            old.call(this, name, age);
        } catch (e) {
            console.error('error:', e.message);
        }
    };
    return d;
}

class User {
    public name: string;

    public age: number;

    public constructor() {
        this.name = 'noname';
        this.age = 0;
    }

    @deError
    @deLimit
    @deFormat
    @deOut
    public init(name: string, age: number): void{
        this.name = name;
        this.age = age;
    }

    public info(): void {
        log('User');
        log('  name', this.name);
        log('  age:', this.age);
    }
}

const user = new User();

user.init('Mike', 34);
user.init('Mike', -10);
user.init('Mike', 50);
