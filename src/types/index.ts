export enum Color {
  red = "빨강",
  blue = "파랑",
  yellow = "노랑",
  violet = "바이올렛",
  black = "검정",
  white = "하양",
}

export enum Direction {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

// type ThingsInLife2 = {
//     colorOfPen:Color;
//     keyboardArrow:Direction;
// }

export interface ThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

export interface MyInterface {
  value: string | number | string[];
}

export interface MyInterface2<T = string> {
  // 제네릭 타입인 T에 기본값을 string으로 할당할 수 있다.
  value: T;
}

export type User = {
  email: string;
  name: string;
  phone: number;
};

export enum Status {
  Stop = "stop",
  Start = "start",
  Wait = "wait",
  Eat = "eat",
}

export interface Order {
  user: string;
  userStatus: Status;
}
