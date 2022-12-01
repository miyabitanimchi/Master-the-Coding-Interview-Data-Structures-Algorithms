mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a - b);

console.log(mergeSortedArrays([1,4,6,10], [3,4,5,8]));

mergeSortedArray2 = (arr1, arr2) => {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    const mergedAndSortedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let arr1Index = 1;
    let arr2Index = 1;

    while (arr1Item || arr2Item) {
        console.log(arr1Item, arr2Item);
        // if arr1 is shorter and without arr1Item === undefined, it becomes undefined > arr2Item => false 
        // and arr2Item will never be undefined, which mean this while loop never ends
        if (arr1Item === undefined || arr1Item > arr2Item) {
            mergedAndSortedArr.push(arr2Item);
            arr2Item = arr2[arr2Index];
            arr2Index++;
        } else {
            mergedAndSortedArr.push(arr1Item);
            arr1Item = arr1[arr1Index];
            arr1Index++;
        }
    }

    return mergedAndSortedArr;
}

console.log(mergeSortedArray2([1,4,6,10,11], [3,4,5,8,10,12]));