const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill'];
const large = new Array(100000).fill('nemo');

const findNemo = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found Nemo!");
        }
    }
}

// console.log(findNemo(large)); // O(n) linear line

const pickupFirstItem = (boxes) => {
    console.log(boxes[0]) // O(1) Constant Time
}

// Exercise: What is the Big O of the below function?
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        // anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}
// A: Big O(3 + 4n)

// Exercise 2
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
}
// A: Big O(4 + 7n) (or (4 + 5n) without including for loop parts)

const differentArrays = (arr1, arr2) => {
    arr1.forEach((item) => console.log(item));
    arr2.forEach((item => console.log(item)));
}

// console.log(differentArrays([1,2,3], [0])); // O(a + b), if nested O(a * b)

const logAllPairOfArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
console.log(logAllPairOfArray([1,2,3,4,5])); // O(n * n) === O(n^2) o of n squared, o of n to the power of 2
