// This represents out stack data structure implementation

function Stack() {

  // properties and methods go here
  let items = []; // This stores the elements of the stack

  this.push = function (element) {
    // This add element(s) to the top of the stack
    items.push(element);
  };

  this.pop = function () {
    // This removes the top item from the stack. It also returns the removed item
    return items.pop();
  };

  this.peek = function () {
    // This returns the top element from the stack
    return items[items.length-1];
  };

  this.isEmpty = function () {
    // This returns true if the stack does not contain any elements and false if otherwise
    return items.length === 0;
  };

  this.size = function () {
    // This returns the number of elements that the stack contains
    return items.length;
  };

  this.clear = function () {
    // This resets the stack
    items = [];
  };

  this.print = function () {
    // This allows us to view the elements of the stack
    console.log(items.toString());
  };
}

// Export Stack class to use in our test drive
module.exports = Stack;
