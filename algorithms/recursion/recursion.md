### What is recursion?

It's a function that refers to itself inside of the function. <br/>
Recursion is good for tasks that have repeated subtasks to do.

```
function inception() {
  inception();
}
```

### What is Stack Overflow

- It's an error that happens when a program runs out of memory in the call stack.
- Computers need to allocate memory to remember things. Stack overflow can occur when we have recursion, and there's no way to stop the recursive call.

### Rules to create recursive functions

1. Identify the base case
2. identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns

### In the case below, we'll get `undefined`. Why?

```
let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }

  counter++
  inception();
}

console.log(inception());
```

Once it returns `'done!'`, the stack is popped off one by one.

1. console.log(inception()) calls inception() no.1. (counter = 0);
2. inception() no.1 calls inception() no.2. (counter = 1);
3. inception() no.2 calls cinception() no.3. (counter = 2);
4. inception() no.3 calls inception() no.4. (counter = 3);
5. inception() no.4 returns 'done!' to inception() no.3; (counter = 4);
6. inception() no.3 returns 'undefined' to inception() no.2;
7. inception() no.2 returns 'undefined' to inception() no.1;
8. inception() no.1 returns 'undefined' to console.log(inception());

Since inception() no.3, 2, and 1 don't have `return`, we get `undefined`.

```
let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }

  counter++
  return inception(); // so we need to return here as well!
}

console.log(inception());
```
