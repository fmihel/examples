import { def, log } from 'log';

def('var');
const globVar = 'global var';
function info(): void {
    let locVar = 10;
    locVar = 0;
    log('global:', globVar);
    log('local:', locVar);
}
info();
