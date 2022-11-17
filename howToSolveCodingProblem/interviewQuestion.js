const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['y', 'z', 'r'];

// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// array2[index] = obj.properties;

const containsCommonItems = (arr1, arr2) => {
    // loop through first array and create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    // loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(containsCommonItems(array1, array2));
// O(a + b)
// O(a) - Space complexity
// if we solve with nested arrays it will be O(a*b) and it's time consuming

// another way - more readable
const containsCommonItems3 = (arr1, arr2) => {
    return arr1.some((item) => arr2.includes(item));
}