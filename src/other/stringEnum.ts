// enum Color {
//     red = "빨강",
//     blue = "파랑",
//     yellow = "노랑",
//     violet = "바이올렛",
//     black = "검정",
//     white = "하양"
// }; 

import {Color} from '../types'

let a:Color = Color.black;
console.log(a);

let b:Color = Color["blue"];
console.log(b);

const faveColor = Color.red
console.log(faveColor);

const c:Color = Color.yellow
console.log(c);

const PotatoColor: Color = "Potato" as Color; // 타입 캐스팅! 포테이토는 컬러가 아니지만 as를 통해 억지로 부여함. 당연하지만 이런건 자주 안쓰는게 좋음
console.log(PotatoColor);