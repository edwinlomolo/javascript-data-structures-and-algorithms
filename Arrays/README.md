# Arrays

An array is the simplest memory data structure. All programming language have a built-in array datatype. JavaScript supports arrays natively.

An array stores values sequentially that are all of the same datatype. JavaScript allows us to create arrays with values from different datatypes.

## Creating and initializing an array

Declaring, creating, and initializing an array in JavaScript is simple.

```javascript
var daysOfTheWeek = new Array(); // method 1 of creating and initializing an array using the keyword new
var daysOfTheWeek = new Array(7); // method 2 of creating and initializing an array by specifying the length of the array
var daysOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"); // method 3 of creating and initializing an array by passing the array elements directly to its constructor
```

However, the `new` keyword is not the best practice. If you want to create an array in JavaScript, we can assign empty brackets(`[]`), as in the following example:

```javascript
var daysOfTheWeek = [];
```

Or we can also initialize the array with some elements,

```javascript
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
```

If we want to know how many elements are in the array(its size), we can use the `length` property.

```javascript
console.log(daysOfTheWeek.length);
```

### Accessing elements and iterating an array

To access a particular position of the array, we can use brackets, passing the index position we would like to access. For example, to print out all the elements of the `daysOfTheWeek` array, we need to loop the array and print the elements, as follows:

```javascript
for (var i = 0; i < daysOfTheWeek.length; i++) {
  console.log(daysOfTheWeek[i]);
}
```

Computers start indexing at position 0. To access an element at the first position of the array, we could do something like this:

```javascript
console.log(daysOfTheWeek[0]);
```

To access the second item in the array:

```javascript
console.log(daysOfTheWeek[1]);
```

...and so on.

### Adding elements to an array

Adding and removing an element from an array can be tricky.

```javascript
var numbers = [0,1,2,3,4,5,6,7,8,9];
```

If we want to add a new element to this array, all we have to do is reference the last free position of the array and assign a value to it.

Let's add 10 to the `numbers` array:

```javascript
numbers[numbers.length] = 10;
```

#### Using the `push()` method

However, there is also a method called `push()` that allows us to add new elements to the end of the array. We can add as many elements as we can just by passing the elements to the `push()` method as arguments:

```javascript
numbers.push(11);
numbers.push(12, 13, 14); // add as many as you want
```

#### Inserting an element in the first position

To insert an element in the first position, we need to free the first position by shifting all the elements to the right. We loop all the elements of the array, starting from the last position `+ 1` (length) and shifting the previous element to the new position to finally assign the new value to the first position `- 1`.

```javascript
for(var i = numbers.length; i >= 0; i--) {
  numbers[i] = numbers[i-1];
}
numbers[0] = -1;
```

#### Using the `unshift()` method

JavaScript `array` class has a method called `unshift()`, which inserts the values passed as arguments at the start of the array.

```javascript
numbers.unshift(-2);
numbers.unshift(-4, -3);
```

The output of the array will contain numbers from `-4 to 13`.

#### Removing elements

We have checked out adding element to the end of an array and at the beginning of an array. To remove an element from an array, we use the `pop()` method.

```javascript
numbers.pop();
```

The output of our array will contain numbers from `-4 to 12`.

#### Removing an element from first position

To remove and element from the beginning of an array, we can use the following javascript code:

```javascript
for(var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i+1];
}
```

We just shifted all the elements one position to the left.

#### Using the `shift()` method

JavaScript `array` class has a method known as `shift()`, which removes an element from the beginning of the array.

```javascript
numbers.shift();
```

### Adding and removing elements from a specific position

What if we want to add or remove an element from any particular position of our array?

We can use the `splice()` method to remove an element from an array by simply specifying the position/index that we would like to delete from and how many elements we would like to remove.

```javascript
numbers.splice(5, 3);
```

The above code will delete three elements, starting from index 5 of our array.

Now let's say we want to insert numbers 2 to 4 back into the array, starting from position 5.

```javascript
numbers.splice(5, 0, 2, 3, 4);
```

The first argument of the method is the position/index we want to remove from or insert elements into.
The second argument is the number of elements we want to delete/remove(in this case we do not want to remove any, so we pass value 0).
The third argument(onwards) are the values we would like to insert into the array.

Let's execute the following code:

```javascript
numbers.splice(5, 3, 2, 4, 5);
```

We are removing elements starting at position/index 5, and we are also adding elements back into the array starting at position/index 5.

## Two-dimensional and multi-dimensional arrays

Let's consider we want to measure the temperature hourly for a few days. Now the we already know we can use an array to store the temperatures, we can easily write the following code:

```javascript
var avgTempDay1 = [75,45,76,55,50];
var avgTempDay2 = [45,67,33,45,30];
```

However, this is not the best approach; we can write better code! We can use matrix(two-dimensional array) to store this information. In which, each row will represent the day, and each column will represent the an hourly measurement of temperature.

```javascript
var avgTemp = [];
var avgTemp[0] = [75,45,76,55,50];
var avgTemp[1] = [45,67,33,45,30]
```

### Iterating the elements of two-dimensional arrays

If we want to take a look at the output of our matrix array, we can use the following function to log the output:

```javascript
function printMatrix(matrixArray) {
  for(var i = 0; i < matrixArray.length; i++) {
    for(var j = 0; j < matrixArray[i].length; j++) {
      console.log(matrixArray[i][j]);
    }
  }
}
```

We need to loop through all the rows and columns. To do this, we need a nested `for` loop in which the variable `i` represents the rows, and `j` represents the columns.

We can call the `printMatrix()` function to print `avgTemp` array content.

```javascript
printMatrix(avgTemp);
```

### Multi-dimensional arrays

We can also work with multi-dimensional arrays in JavaScript.
For example, let's create a `3x3` matrix.

```javascript
var matrixArray = [];
for(var i = 0; i < 3; i++) {
  matrixArray[i] = [];
  for(var j = 0; j < 3; j++) {
    matrixArray[i][j] = [];
      for(var k = 0; k < 3; k++) {
        matrixArray[i][j][k] = i+j+k;
    }
  }
}
```

To print the content of our matrix array, let's create a function called `print3x3()` to output matrix content.

```javascript
function print3x3(matrix) {
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      for(var k = 0; k < matrix[i][j].length; k++) {
        console.log(matrix[i][j][k]);
      }
    }
  }
}
```

We can call the `print3x3()` to output the content of our matrix.

```javascript
print3x3(matrixArray);
```
