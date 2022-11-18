// https://youtu.be/XKu_SEDAykw

// [1, 2, 3, 9] Sum = 8
// [1, 2, 4, 4] Sum = 8

// naive solution, time consuming
const hasPairWithSum = (list, sum) => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            console.log(i, j);
            if (list[i] + list[j] === sum) {
                return true;
            }
        }
    }
    return false;
}
// console.log(hasPairWithSum([1,2,3,4,5], 6));

const hasPairWithSum2 = (list, sum) => {
    const mySet = new Set();
    console.log(mySet);
    for (let i = 0; i < list.length; i++) {
        if (mySet.has(list[i])) {
            return true;
        }
        mySet.add(sum - list[i]);
        console.log(console.log(mySet));
    }
}

console.log(hasPairWithSum2([1,2,3,4,5], 6));
console.log(hasPairWithSum2([12, 3, -7, 0.3, 2, 100, -10, 4], 6));
