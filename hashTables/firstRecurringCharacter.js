// by Google

// Given an array = [2,4,5,6,7,5,9]
// return 5

// Given an array = [2,1,1,4,6,3,8,9,0]
// return 1

// Given an array = [2,3,4,5];




// const firstRecurringCharacter = (arr) => {
//     const arrSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         arrSet.add(arr[i]);
//     }

//     for (let j = 0; j < arr.length; j++) {
//         if (arrSet.has(arr[j])) {
//             return arr[j];
//         }
//     }

//     return undefined;
// }

const firstRecurringCharacter2 = (arr) => {
    const arrSet = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        arrSet[i] = 0;
    }

    while (count <= arr.length - 1) {
        if (arrSet[arr[count]] === 1) {
            return arr[count];
        } else {
            arrSet[arr[count]] = 1;
        }
        count++
    }


    return undefined;
}

console.log(firstRecurringCharacter2([2,4,5,6,7,5,9]));
console.log(firstRecurringCharacter2([1,2,3,4,5,6,7,7]));
console.log(firstRecurringCharacter2([1,2,1,3,10,5,3]));