let value: string = 'Вася';
let value2: boolean = true;
let value3: number = 10;
let value4: object = {};
let value5: undefined = undefined;
let value6: null = null;
let value7: string | number = 'Петя';
value7 = 50;
let arr: string[] = ['html', 'css'];
// arr.push(10)
let arr2: Array<string | number> = ["Вася", "Петя", 50];
let tuple: [string, number, boolean, number] = ['Вася', 2, true, 50];

type strType = string | string[];
let text: strType = 'Вася';
text = ['Петя', 'Илья'];
// text = 10;

type User = {
    id: number;
    name: string;
    age: number;
    alive?: boolean;
}

type Prof = {
    skills: string[]
}

type Admin = User & Prof;
let vasya: Admin = {
    id: 2,
    name: 'Вася',
    age: 25,
    skills: ['js', 'ts', 'react']
    // alive: true
}

interface IProduct {
    id: number;
    title: string;
    desc?: string | string[],
    price: number
    info: ()=>void
}

interface IBonus {
    discount: string
}

interface ISale extends IProduct, IBonus {};

let apple: ISale = {
    id: 1,
    desc: "Яблоко",
    discount: '20%',
    title: 'Голден',
    price: 10000,
    info(){
        console.log(this.title);
    }
}

function find <T> (value: T): T[] {
    return [value]
}

find<string>('html')
find<number>(10)
find<boolean>(true)
find<ISale>(apple)