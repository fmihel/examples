import { def, log } from 'log';

def('descriptor');
class TClass {
    public prop: string;

    public constructor() {
        this.prop = 'value';
    }

    public func(): string {
        return this.prop;
    }
}

const o = new TClass();
// получение дескиптора свойства
let desc = Object.getOwnPropertyDescriptor(o, 'prop');
log('descriptor prop', desc);
// запрет на изменение свойства
Object.defineProperty(o, 'prop', {
    writable: false,
});

try {
    o.prop = 'new value!!!';
} catch (у) {
    console.error('can-t change prop');
}
log('new value:', o.prop);


desc = Object.getOwnPropertyDescriptor(o, 'func');
log('descriptor func()', desc);
