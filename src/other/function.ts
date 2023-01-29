// enums
import { Color, Direction } from "../types";

// interface
import type { ThingsInLife } from "../types";

function printRGB(color:Color): Color {
    return color;
}

console.log(printRGB(Color.blue));

function printThingsInLife(things:ThingsInLife):string {
    return `color of pen is ${things.colorOfPen} and keyboard arrow is
    ${things.keyboardArrow}`;
    
}

console.log(printThingsInLife({colorOfPen:Color.red, keyboardArrow:Direction.left}));

