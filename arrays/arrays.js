const strings = ['a', 'b', 'c', 'd'];

// lookup
strings[2];

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)


// unshift
strings.unshift('z'); // O(n)
// Why O(n)? Because we need to shift all the other numbers to right, iterate and reassign indices

// splice
strings.splice(2, 0, 'NaN'); // O(n/2) => O(n)