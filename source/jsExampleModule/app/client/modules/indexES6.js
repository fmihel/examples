/** es6 style by default */
import export02 from './export02';
import export01 from './export01';
import { self, TClass } from './export03';
// import * as export03 from './export03';

class TOther extends TClass {

}
const other = new TOther();

export default function info() {
    return {
        export01: export01.info(),
        export02: export02.info(),
        self,
        other,
    };
}
