# Patterns of Algorithm

Algorithm in the programming world is very interesting. We will cover **recursion**, **dynamic programming**, and **greedy algorithm**. Also, we will cover some famous problems.

## Recursion

Recursion is a method to solve problems that consists of solving smaller portions of the same problem until you solve the original larger problem. It involves calling the function itself.

A method or function is recursive if it can call itself directly.

```javascript
function recursiveFunction(params) {
  recursuveFunction(params); // Recursive call
}
```

A function is also called recursive if it can call itself indirectly.

```javascript
function recursiveFucntion1(params) {
  recursiveFunction2(params);
}

function recursiveFunction2(params) {
  recursiveFunction1(params);
}
```

Every recursive function must have a base case, which is a condition in which no recursive call is made(a stop point) to prevent infinite recursion.

## Javascript limitation on the call stack size

What happens when we forget or don't add a base case to stop the recursive calls of a function? It will not be executed indefinitely; the browser will throw an error which is known as the **stack overflow error**.

Each browser has its own strength and weakness. We can use the following code to test out how many time the function is executed and the type of error returned to us if we run the code in the browser.

```Javascript
const i = 0;

function recursiveFunc() {
  i += 1;
  recursiveFunc();
}

 try {
   recursiveFunc();
 } catch (ex) {
   console.log("i = " + i + " error: " + ex);
 }
 ```

 Depending on your operating system and browser, the values might be different, but they will be close.

 ## The Fibonacci sequence

 This is a sequence, such that each number is the sum of the two preceeding ones, starting from 0 and 1. That is, 

 * The Fibonacci sequence of 1 or 2 is 1.
 * The Fibonacci sequence of `n` (for `n > 2`) is the Fibonacci of (`n-1`) + Fibonacci of (`n-2`)

Fibonacci function implementation:

```javascript

function fib(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fib(num-1) + fib(num-2); // Recursive call happens here
}
```

We just implemened Fibonacci function using recursion. But, why recursion? Is it faster? Recursion is not faster than the normal version; it is slower. However, note that recursion is clear to understand, and it requires less code as well.

So we usually use recursion because it is easier to solve problems using it.
