const strings = ['a', 'b', 'c', 'd'];

// lookup
strings[2];

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)


// unshift
strings.unshift('z'); // O(n)
// Why O(n)? Because we need to shift all the other numbers to right, iterate and reassign indices

// splice
strings.splice(2, 0, 'NaN'); // O(n/2) => O(n)

class MyArray {
    constructor() {
        this.length = 0,
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) { // O(n)
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push("I");
myArray.push("am");
myArray.push("maybe");
myArray.push("Miyabi");
myArray.delete(2);
console.log(myArray);