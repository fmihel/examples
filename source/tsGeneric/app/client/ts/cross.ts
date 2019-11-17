import { def, log } from 'log';

def('cross');

function ext<T, U>(a: T, b: U): T & U {
    const c: T & U = Object.assign(a, b);
    log(c);
    return c;
}

ext(
    { a: 10, b: 20 },
    { a: 45, c: 40 },
);

class A {
    public c: string;

    public constructor() {
        this.c = 'class A';
    }
}

class B {
    public f: string;

    public constructor() {
        this.f = 'class B';
    }
}
type AB = A | B;

const a = new A();
const b = new B();
ext(a, b);


function getAB(name: string = 'B'): AB {
    return name === 'A' ? new A() : new B();
}

const s = getAB('B');

// приведение к определенному типу
// (<A>s).c = '10'; - данная строка тоже работает, но может конфликтовать если использовать tsx
(s as A).c = '10';
if ((s as A).c) {
// if ((<A>s).c) {
    log('s is class A');
} else {
    log('s is class B');
}

log('s=', s);
