# Linked List

An Array(we can also call it a list) is a very simple data structure that stores a sequence of data. You will learn how to implement and use a linked list, which is a dynamic data structure, meaning that we can add or remove items from it at will and it will grow as needed.

Array data structure has some cons: the size of the array is fixed(in most languages) and inserting or removing items from the beginning or from the middle of the array is expensive, because the elements need to be shifted over(even though you learned that JavaScript has some methods from the `array` class that will do that for us, this is what happens behind the scenes as well).

Linked lists store a collection of elements; but unlike arrays, in linked lists, the elements are not placed contiguously in memory. Each element consists of a node that stores the elements itself and also a reference(also known as a pointer or link) that points to the next element.

One of the benefits of linked lists over a conventional array is that we do not need to shift elements over when adding or removing them. However, we need to use pointers when working with a linked list and, because of it, we need to pay some extra attention when implementing a linked list. Another detail in the array is that we can directly access any element at any position; with linked list, if we want to access an element from the middle, we need to start from the beginning(head) and iterate the list until we find the desired element.

We have some real-world example of a linked list. The first example is a conga line. Each person is an element, and the hands would be the pointer that links to the next person in the conga line. You can add people the line - all you just need to do is find the spot where you want to add the person, decouple the connection, the insert the new person and make the connection again.

Another example would be a scavenger hunt. You have a clue, and this clue is the pointer to the place where you can find the next clue. With this link, you go to the next place and get another clue that will lead to the next one. The only way to get a clue from the middle of the list is to follow the list from the beginning(from the first clue).

We have another example, which is the most popular one used to exemplify linked list; that of a train. A train consists of a series of vehicles(wagons). Each vehicle(wagon) is linked to each other. You can decouple a wagon, change its place, or add or remove it. Each wagon is an element of the list and the link between the wagons is the pointer.
