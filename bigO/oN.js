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

console.log(findNemo(large)); // O(n) linear line


