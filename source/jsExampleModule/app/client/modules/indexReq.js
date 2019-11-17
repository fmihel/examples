// import export02 from './export02';
// import export01 from './export01';
// import { self, TClass } from './export03';
const export01 = require('./export01');
const export02 = require('./export02').default;
const export03 = require('./export03');

function info() {
    return {
        export01: export01.info(),
        export02: export02.info(),
        export03,
    };
}
module.exports = info;
