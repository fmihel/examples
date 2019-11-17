export interface IInfo{
    name: string;
    value: string;
}


export class TClass {
    public count: number;

    public name: string;

    public arr: number[]=[];

    public constructor(aCount: number = 10) {
        this.Count = aCount;
        this.name = 'TClass';
    }

    public get Count(): number {
        return this.count;
    }

    public set Count(aCount: number) {
        this.count = aCount;
        this.initArr();
    }

    private initArr(): void {
        let i: number;
        this.arr = [];
        for (i = 0; i < this.count; i++) {
            this.arr.push(i);
        }
    }

    public createInfo(): IInfo[] {
        const info: IInfo [] = [];
        info.push({ name: 'class', value: this.name });
        info.push({ name: 'count', value: this.Count.toString() });
        info.push({ name: 'arr', value: `[${this.arr.join(',')}]` });
        return info;
    }

    /**
     *
     * @param result 'print' | 'return' | 'iInfo'
     *
     */
    public info(result: string = 'print'): string |IInfo[] {
        const info: IInfo [] = this.createInfo();
        let res = '';
        if (result === 'print') {
            info.map((o) => {
                console.info(o.name, o.value);
                return true;
            });
        } else if (result === 'return') {
            info.map((o) => {
                res += `${o.name}:${o.value}${res === '' ? '' : ','}`;
                return true;
            });
        } else {
            return info;
        }
        return res;
    }
}
