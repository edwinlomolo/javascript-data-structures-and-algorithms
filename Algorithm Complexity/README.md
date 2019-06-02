# Algorithm Complexity

We are going to talk about the **big-O notation** and the NP-Completeness theory.

## Big-O notation

The big-O notation is used to describe the performance or complexity of an algorithm. When analyzing algorithms, the following classes of functions are the most commonly encountered:

| **Notation**       | **Name**         |
| ------------------ | ---------------- |
| *O(1)*             | Constant         |
| *O(log (n))*       | Logarithmic      |
| *O((log(n))c)*     | Poly-logarithmic |
| *O(n)*             | Linear           |
| *O(n<sup>2</sup>)* | Quadratic        |
| *O(n<sup>c</sup>)* | Polynomial       |
| *O(c<sup>n</sup>)* | Exponential      |

## Understanding the big-O notation

How do we measure the efficiency of an algorithm? We usually use  resources such as CPU (time) usage, memory usage, disk usage and network usage. When talking about big-O notation, we usually consider CPU (time) usage.

 ## O(1)

Consider the following function:

```javascript
function increment(num) {
    return ++num;
}
```

If we try to execute `increment(1)`, we will have an execution time equal to x. If we try to execute the increment function again with a different parameter `increment(2)`, the execution time will also be x. The parameter does not matter, the performance of the function increment will be the same. The `increment()` function has a complexity of *O(1)*(which is constant).

## O(n)

Let's use the sequential search algorithm we defined for searching as an example.

```javascript
function sequentialSearch(array, item){
	for (var i=0; i<array.length; i++){
		if (item === array[i]){ //{1}
			return i;
		}
	}
	return -1;
}
```

If we pass an array with 10 elements to this function and look for element 1, in first attempt, we will find the element we are looking for. Le't suppose the cost is 1, for each time we execute line `{1}`.

Let's suppose we are looking for element 11. Line `{1}` will be executed 10 times(it will iterate through all the values of the array and it will not find the values we are looking for; therefore it will return -1). If line `{1}` has a cost of 1, executing it 10 times has a cost of 10, which is 10 times more than the first example we used.

Now, suppose the array has 1000 elements. Searching for element 1001 will result in line `{1}` being executed 1000 times(and then returning -1).

The total cost of execution of the `sequentialSearch` function depends on the number of elements of the array (size) and also on the value we are looking for. If the item we are looking for exists in the array, then how many times will line `{1}` be executed? If the item we are looking for does not exists, then line `{1}` will be executed the size-of-the-array size, which we call the worst-case scenario.

Considering the worst-case scenario of the `sequentialSearch` function, if we have an array with size 10, the cost will be 10. If we have an array with size 1000, the cost will be 1000. We can conclude that the `sequentialSearch` function has a complexity of *O(n)* , *n* being the size of the array(input).

Let's modify the function to calculate the cost(the worst-case scenario):

```javascript
function sequentialSearch(array, item){
	var cost = 0;
	for (var i=0; i<array.length; i++){
		cost++;
		if (item === array[i]){ //{1}
			return i;
		}
	}
	console.log('cos ' + array.length + ' is ' + cost);
	return -1;
}
```



##  O(n<sup>2</sup>)

Consider the bubble sort algorithm:

```javascript
function swap(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array){
    var length = array.length;
    for (var i=0; i<length; i++){ //{1}
        for (var j=0; j<length-1; j++ ){ //{2}
            if (array[j] > array[j+1]){
            	swap(array, j, j+1);
            }
    	}
    }
}
```

Consider that line `{1}` and line `{2}` have a cost of 1 each. Let's modify the algorithm to calculate the cost.

```javascript
function bubbleSort(array){
    var length = array.length;
    var cost = 0;
    for (var i=0; i<length; i++){ //{1}
        cost++;
        for (var j=0; j<length-1; j++ ){ //{2}
            cost++;
            if (array[j] > array[j+1]){
            	swap(array, j, j+1);
            }
    	}
    }
    console.log('cost ' + length + 'is ' + cost);
}
```

If we execute `bubbeSort` for an array of size 10, the cost will be 100(10<sup>2</sup>).  If we execute `bubbleSort` for an array with size 100, the cost will be 10,000(100<sup>2</sup>). Note that the execution will take  even  longer every time we increase the input size.

![](https://res.cloudinary.com/dazskjikr/image/upload/v1558687688/big_O_graph.png)

## Big-O cheat sheet

### Data Structures

| **Data Structures** | **Average Cases** | **Worst Cases** |
| ------------------- | ----------------- | --------------- |
| Array/Stack/Queue   | O(1)              | O(1)            |
| Linked List         | O(1)              | O(1)            |
| Doubly Linked List  | O(1)              | O(1)            |
| Hash Table          | O(1)              | O(1)            |
| Binary Search Tree  | O(log (n))        | O(n)            |
| AVL Tree            | O(log (n))        | O(log (n))      |

### Graphs

| **Node/Edge Management** | **Storage Size**     | **Add Vertex**       | **Add Edge** | **Remove Vertex**    | **Remove Edge** | **Query** |
| ------------------------ | -------------------- | -------------------- | ------------ | -------------------- | --------------- | --------- |
| Adjacency List           | O(\|V\| + \|E\|)     | O(1)                 | O(1)         | O(\|V\| + \|E\|)     | O(\|E\|)        | O(\|E\|)  |
| Adjacency Matrix         | O(\|V\|<sup>2</sup>) | O(\|V\|<sup>2</sup>) | O(1)         | O(\|V\|<sup>2</sup>) | O(1)            | O(1)      |

### Sorting algorithms

| **Algorithm (applied to Array)** | **Best Cases**   | **Average Cases** | **Worst Cases**  |
| -------------------------------- | ---------------- | ----------------- | ---------------- |
| Bubble sort                      | O(n)             | O(n<sup>2</sup>)  | O(n<sup>2</sup>) |
| Selection sort                   | O(n<sup>2</sup>) | O(n<sup>2</sup>)  | O(n<sup>2</sup>) |
| Insertion sort                   | O(n)             | O(n<sup>2</sup>)  | O(n<sup>2</sup>) |
| Merge sort                       | O(n log (n))     | O(n log (n))      | O(n log (n))     |
| Quick sort                       | O(n log (n))     | O (n log (n))     | O(n<sup>2</sup>) |
| Heap sort                        | O(n log (n))     | O(n log (n))      | O(n log (n))     |
| Bucket sort                      | O(n+k)           | O(n+k)            | O(n<sup>2</sup>) |
| Radix sort                       | O(nk)            | O(nk)             | O(nk)            |

### Searching algorithms

| **Algorithm**             | **Data Structure**                      | **Worst Case**   |
| ------------------------- | --------------------------------------- | ---------------- |
| Sequential search         | Array                                   | O(n)             |
| Binary search             | Sorted Array                            | O(log (n))       |
| Depth First Search(DFS)   | Graph of \|V\| vertices and \|E\| edges | O(\|V\| + \|E\|) |
| Breadth First Search(BFS) | Graph of \|V\| vertices and \|E\| edges | O(\|V\| + \|E\|) |

## Introduction to the NP-Completeness theory

In general, we say an algorithm is efficient if it is O(n<sup>k</sup>) for some constant *k*, and this is called a polynomial algorithm.

There is another set of algorithms called **NP(nondeterministic polynomial)**. An NP problem is a problem for which the solution can be verified in a polynomial time.

If a problem P has an algorithm that runs in polynomial, we can also verify its solution in polynomial time. Then, we conclude that *P* is a subset of, or equal to *NP*. However, it is unknown whether *P=NP*.

**NP-Complete** problems are the hardest problems in an NP set. A decision problem *L* is NP-Complete if:

1.  *L* is in NP (that is, any given solution for NP-complete problems can be verified quickly, but there is no known efficient solution).
2. Every problem in NP is reducible to *L* in polynomial time.

To understand what the reduction of a problem is, consider *L* and *M* as two decision problems. Suppose algorithm *A* solves *L*. That is, if *y* is an input for *M*, then algorithm *B* will answer *Yes* or *No* depending whether *y* belongs to *M* or not. The idea is to find a transformation from *L* to *M* so that algorithm *B* can be part of an algorithm *A* to solve *A*.

We have another set of problems called NP-Hard. A problem is NP-Hard if it follows property 2(of NP-Complete), and it does not need to follow property 1. Therefore, NP-Complete set is a subset of the NP-Hard set.

Whether *P=NP* or not is one of the biggest question in computer science. If someone finds the answer to this question, it would have a major impact in cryptography, algorithm research, artificial intelligence, and many other fields.

As examples of NP-Hard problems that are not NP-Complete problems, we can mention the **halting problem** and **Boolean Satisfiability(SAT)**.

As examples of NP-Complete problems, we can also mention the subset sum problem, traveling salesman problem, and vertex cover problem.

For more information about these problems, you can [check here](h t t p s : / / e n . w i k i p e
d i a . o r g / w i k i / N P - c o m p l e t e n e s s).

### Impossible problems and heuristic algorithms

Some of the problems we mentioned are impossible to solve. However, there are techniques that can be used to achieve an approximate solution in a satisfactory time. A technique would be using heuristic algorithms. A solution produced by heuristics might not be the best of all solutions, but it is good enough to solve the problem at the time.

Some examples of heuristics are local search, genetic algorithms, heuristics routing, and machine learning. [Check this out](http://goo.gl/gxIu9w).

