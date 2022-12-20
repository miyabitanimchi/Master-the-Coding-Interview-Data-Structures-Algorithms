class Stack {
    constructor() {
        this.values = [];
        this.length = this.values.length;
    }

    peek() {
        return this.values[this.values.length - 1];
    }

    push(value) {
        this.values.push(value);
        this.length = this.values.length;
        return this;
    }

    pop() {
        if (this.length === 0) return this;
        this.values.pop();
        this.length = this.values.length;
        return this;
    }

    isEmpty() {
        return !this.length;
    }
}

const myStack = new Stack();
myStack.push("Luffy");
myStack.push("Zoro");
myStack.push("Nami");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.isEmpty());