function tsOut2(num: number): void {
    const s = 10;
    if (num < s) { console.log(num); } else {
        console.log('error');
    }
}

function tsOut(s: string): string {
    let ss = s;
    ss += ss;
    console.info(s);
    return ss;
}

tsOut2(15);
tsOut('wjehdwjek');
