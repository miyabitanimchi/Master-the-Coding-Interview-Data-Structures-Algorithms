// by Google

// Given an array = [2,4,5,6,7,5,9]
// return 5

// Given an array = [2,1,1,4,6,3,8,9,0]
// return 1

// Given an array = [2,3,4,5];




// my solution
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
console.log(firstRecurringCharacter2([5,6,7,8]));
console.log(firstRecurringCharacter2([2,5,5,2.1,8,0]));




// naive way... don't do this. this is O(n^2) (O of squared)
// (but for this space complexity is O(1))
const firstRecurringCharacterNaiveway = (arr) => {
    for (let i = 0; i < arr.length; arr++) {
        for (let j = i + 0; j < arr.length; arr++) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
    return undefined;
}



// solution by andrei
const firstRecurringCharacterByAndrei = (arr) => {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        // if there is already the key, it means it's the first recurring item
        if (map[arr[i]] !== undefined) return arr[i];
        map[arr[i]] = i; // this time the value can be anything
    }
    return undefined;
}
// O(n) because of the space complexity of the map, but still it's way faster than nesting loops
// fast access O(1), tradeoff: more memory O(n)
console.log(firstRecurringCharacterByAndrei([2,5,5,2.1,8,0]));