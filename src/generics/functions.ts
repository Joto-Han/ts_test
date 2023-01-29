// types
import type { Order, User } from "../types";

// enums
import {Status} from "../types"

function getData<T>(data:T):T {
    return data;
};



// 에러 없이 콘솔로그 되는 유효한 호출
console.log(getData<string>("han juho"));
console.log(getData<number>(940726));
console.log(getData<User>({ email: "han@ju.ho", name: "hanjuho" , phone: 123456}));
console.log(getData<string[]>(["han", "juho"]));
console.log(getData<string[]>([])); // 빈 배열도 유효한 인자입니다!










const User:Order[] = Object.values<Status>(Status).map((status, i) => {
    return {
        user: `hey Hanjuho! ${i}`,
        userStatus: status
    }
})

console.log(User);


