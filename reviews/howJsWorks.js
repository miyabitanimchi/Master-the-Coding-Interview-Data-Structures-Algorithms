/* What is a program? */
// - Allocate memory
// - Parse and execute


/* How JS works on browsers */
// - There is the JS engine that each browser implements
// - It's the V8 engine, and used in Chrome and Node.js. It reads JS
// - The engine consists of two parts, a memory heap and a call stack
//   - Memory heap: Where the memory allocation happens
//   - Call stack: where the code is read and excuted, it tells you where you are in the program

// Memory allocation in memory heap
const a = 1;
const b = 10;
const c = 100;

/* Why global variables are bad */
// It fills up memory heap and the browser will not be able to work

// Cakk stacks
console.log(1);
console.log(2);
console.log(3);

