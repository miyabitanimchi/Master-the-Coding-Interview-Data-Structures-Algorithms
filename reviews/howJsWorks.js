/* What is a program? */
// - Allocate memory
// - Parse and execute


/* How JS works on browsers */
// - There is the JS engine that each browser implements
// - It's the V8 engine, and used in Chrome and Node.js. It reads JS
// - The engine consists of two parts, a memory heap and a call stack
//   - Memory heap: Where the memory allocation happens
//   - Call stack: where the code is read and excuted, it tells you where you are in the program
// - ALSO, we need a JS runtime environment, it's included in browsers
//   - web APIs
//     setTimeout() is part of the web API, not technically part of JS
//     Browsers give us to use so we can do asyncronous programming
//   - Callback queue
//   - Event loop

// Memory allocation in memory heap
const a = 1;
const b = 10;
const c = 100;

// Call stacks
console.log(1);
console.log(2);
console.log(3);
// Call stack reads the first line console.log, and it gets put in the call stack
// and it pops out from the call stack and logs the console.log, and will be removed


/* Why global variables are bad */
// It fills up memory heap and the browser will not be able to work


/* what does JS is a single threaded language that can be non-blocking mean? */
// - Single threaded means that it has only one call stack
//   (other languages can have multiple stacks and these are called multi threaded)
// - FILO, first in, last out
// - Non-blocking ... there is asynchronous process with callback functions, and they gets run in the background

