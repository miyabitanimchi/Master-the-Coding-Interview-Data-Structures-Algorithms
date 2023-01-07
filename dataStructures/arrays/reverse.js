const reverseStr = (str) =>  str.split("").reverse().join("");


console.log(reverseStr("Hi I'm Miyabi"));

const reverseStr2 = (str) => {
    if (!str || str < 2 || typeof str !== "string") return "pass a string";

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join("");
}

console.log(reverseStr2("Bonjour! Je suis Miyabi"));

const reverse3 = str => [...str].reverse().join(""); // simple!

console.log(reverse3("Hallo! Ich bin Miyabi"));