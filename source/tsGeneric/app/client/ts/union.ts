import { def, log } from 'log';

def('union');

// пример указания вариантов типа для входного аргумента
function more(a: string|number = 'default'): void {
    log('type a:', typeof (a), a);
}
// ------------------------------
more();
let uVar: string | number | boolean = 10;
//-------------------------------
uVar = 'hwqjwedwjhedwjhkje';
more(uVar);
// ------------------------------
uVar = 10.8;
more(uVar);
// ------------------------------
let uStr: 'one' | 'two' | 'three';
//  eslint-disable-next-line prefer-const
uStr = 'two';

// uStr = 'three';
log('uStr', uStr);
// ------------------------------

type TUPLE = [number, number, string];
// const tup:TUPLE = [1, 2, 'qwedkwje'];
const ar: TUPLE[] = [[1, 2, 'qwkedklqwh'], [1, 2, 'qwkedklqwh']];

ar[0] = [1, 2, 'qwkedklqwh'];
ar[1] = [2, 3, 'asdckcaslk'];
/* tup[0] = 10;
tup[1] = 20;
tup[2] = 'hwdwdjhgwej';
*/
log('tup', ar);
