// interface MyInterface {
//     value: string | number | string[]
// };

import type { MyInterface, MyInterface2 } from "../types";

const stringObject:MyInterface = { value: "hello hanjuho!!"};
const numberObject:MyInterface = { value: 19940726 };
const stringArrayObject:MyInterface = { value: ["hello!!", "han", "juho"]};

console.log(stringArrayObject);


// 위와 아래나 비슷하지만 제네릭을 사용하지 않을 경우 타입이 추가될때마다 하나하나 인터페이스에 추가해줘야하는 번거로움이 있다.

// interface MyInterface2<T = string> { // 제네릭 타입인 T에 기본값을 string으로 할당할 수 있다.
//     value:T
// };

const stringObject2:MyInterface2<string> = { value: "hello hanjuho"};
const stringObject2_1:MyInterface2 = { value: "hello hanjuho"}; // <string>을 지워도 기본값인 string이 할당되어서 가능하다.
const numberObject2:MyInterface2<number> = { value: 940726 };
// const numberObject2_1:MyInterface2 = { value: 940726 }; // 기본값은 string이기에 <number>를 명시하지 않으면 이 코드는 가능하지 않다.
const stringArrayObject2:MyInterface2<string[]> = { value: ["hello","hanjuho"]};

console.log(stringArrayObject2);
