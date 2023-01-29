// 숫자형 이넘

enum Color {
    red,
    green,
    blue,
    yellow,
    violet = 4,
    black = 2,
    white
}
const a:Color = Color.yellow;
console.log(a); // 3

const b:Color = Color.white;
console.log(b); // 3

console.log(Color["yellow"]);
console.log(Color[3]);
console.log(Color[2]);
console.log(Color);