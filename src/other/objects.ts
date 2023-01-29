import { Color,Direction } from "../types";

const keys = Object.keys(Color);
const values = Object.values(Color);

console.log(keys , values);

type ObjectColor = {
    [a in Color]?: string;
};

const myObject:ObjectColor = {
    // "검정": "블랙",
    // "노랑": "옐로우",
    // "바이올렛": "바이올렛",
    // "빨강": "레드",
    // "파랑": "블루",
    // "하양": "화이트,"
}

values.forEach((key) => {
    myObject[key] = "hello"
})

console.log(myObject);






type TableData = {
    [x:string]: string;
};

const enum Tablekey {
    아이디= "id",
    이름= "name",
    나이= "age"
}

type StrictTableData = { [key in Tablekey]: String};
type LessStrictTableData = { [key in Tablekey]?: String};


const myTableData:LessStrictTableData = {
    id: "2",
    name: "han juho",
    // age: "40",
    // address: "부산 금정구"
}

console.log(myTableData);





const {black,blue,red,violet:biolet,white,yellow} = Color;
const c = biolet

console.log(c);
