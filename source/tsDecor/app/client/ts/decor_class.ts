import { def, log } from 'log';

def('class decorator');
interface IFill{
    fill: boolean;
    checkFill(): void;
    isFill(): boolean;
}

function deFill(TRef: any): any {
    return class extends TRef implements IFill {
        public fill: boolean;

        public constructor(...any: any) {
            super(...any);
            this.fill = false;
            this.checkFill();
        }

        // данные методы нельзя будет использовать в экземпляре класса TUser!!!!
        public checkFill(): void {
            this.fill = (this.name !== '');
        }

        // данные методы нельзя будет использовать в экземпляре класса TUser!!!!
        public isFill(): boolean {
            return this.fill;
        }
    };
}

@deFill
class TUser {
    public name: string;

    public login: string;

    public constructor() {
        this.name = '';
        this.login = '';
    }
}

const u = new TUser();
