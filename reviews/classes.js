// Object => reference type ... created by the programmer, not by the programming language like primitive types

const obj = {a:1, b:2};
// when we assign an object into a variable, we assign the reference / address

// Context
// Contexts tell you where we are within the object
// What is the left part the dot

// Instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}. I am a ${this.type}`);
    }
}

class Wizerd extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`weee, I am a ${type}`);
    }
}

const wizerd1 = new Wizerd("Liah", "Healer");
const wizerd2 = new Wizerd("Jay", "Dark Magic");

console.log(wizerd1.introduce());
console.log(wizerd2.play());