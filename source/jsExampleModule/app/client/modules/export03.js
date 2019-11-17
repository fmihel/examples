/**
 * ES6 type module
 */

const export03 = {
    info() {
        return 'exp obj info from ES6 mod..';
    },
};

class TClass {
    constructor() {
        this.name = 'TClass';
    }

    get className() {
        return this.constructor.name;
    }

    log(msg) {
        // eslint-disable-next-line no-console
        console.info(`${this.className}:`, msg);
    }

    info() {
        return `is class:${this.className}`;
    }
}
const self = new TClass();

/**
 * for import use
 * import exp from 'export02';
 *
 * !!!!if need import in commonJS use
 * const export02=require('export').default;
 *
 */

export default export03;
export { TClass, self };
