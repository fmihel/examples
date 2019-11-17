
export default function log(...a: any): void {
    console.log(...a);
}
function def(module: string): void {
    log('');
    log(`${module} ${'-'.repeat(30 - module.length)}`);
}

export { log };
export { def };
