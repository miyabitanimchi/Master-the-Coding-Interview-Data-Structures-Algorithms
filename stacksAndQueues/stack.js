class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
            if (this.length === 0) {
                this.top = newNode;
                this.bottom = newNode;
            } else {
                const holdingPointer = this.top;
                this.top = newNode;
                this.top.next = holdingPointer;
            }
            this.length++;
            return this;
    }

    pop() {
        const newNode = new Node();
        if (this.length === 0) return this;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;

        } else {
            const newTop = this.top.next;
            this.top = newTop;
        }
        this.length--;
    }

    isEmpty() {
        return !this.bottom; // or !this.top?
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