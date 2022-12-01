mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a - b);

console.log(mergeSortedArrays([1,4,6,10], [3,4,5,8]));