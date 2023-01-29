interface IStack<T> {
    push(item:T) : void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
};

class Statck<T> implements IStack<T>{ // implements를 사용하여 IStack에 정의된 프로퍼티들을 필수로 써야한다

    private storage:T[] = [];

    constructor (private limit = 4) {};

    push(item: T): void {
        if(this.size() === this.limit) {
            throw Error("stack is full....")
        }
        this.storage.push(item);
    }
    pop(): T | undefined {
        if(this.size() === 0) {
            throw Error("stack is empty...")
        }
        return this.storage.pop();
    }
    peek(): T | undefined {
        if(this.size() === 0) {
            throw Error("stack is empty...")
        }
        return this.storage[this.size() - 1];
    }
    size(): number {
        return this.storage.length;
    }
    }

    const testStack = new Statck<string>();

    testStack.push("han");
    testStack.push("ju");
    testStack.push("ho");
    console.log(testStack.peek());
    testStack.push("hello!!")
    console.log(testStack.peek());
    // // testStack.push("how R U ?") // 스택 이즈 풀.. 이란 에러가 출력