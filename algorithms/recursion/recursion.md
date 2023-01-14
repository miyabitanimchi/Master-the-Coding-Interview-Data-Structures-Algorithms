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
