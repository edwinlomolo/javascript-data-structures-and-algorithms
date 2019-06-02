# Linked List

An Array(we can also call it a list) is a very simple data structure that stores a sequence of data. You will learn how to implement and use a linked list, which is a dynamic data structure, meaning that we can add or remove items from it at will and it will grow as needed.

Array data structure has some cons: the size of the array is fixed(in most languages) and inserting or removing items from the beginning or from the middle of the array is expensive, because the elements need to be shifted over(even though you learned that JavaScript has some methods from the `array` class that will do that for us, this is what happens behind the scenes as well).

Linked lists store a collection of elements; but unlike arrays, in linked lists, the elements are not placed contiguously in memory. Each element consists of a node that stores the elements itself and also a reference(also known as a pointer or link) that points to the next element.

![LinkedList](https://res.cloudinary.com/dazskjikr/image/upload/v1558467819/linked_list.png)

One of the benefits of linked lists over a conventional array is that we do not need to shift elements over when adding or removing them. However, we need to use pointers when working with a linked list and, because of it, we need to pay some extra attention when implementing a linked list. Another detail in the array is that we can directly access any element at any position; with linked list, if we want to access an element from the middle, we need to start from the beginning(head) and iterate the list until we find the desired element.

We have some real-world example of a linked list. The first example is a conga line. Each person is an element, and the hands would be the pointer that links to the next person in the conga line. You can add people the line - all you just need to do is find the spot where you want to add the person, decouple the connection, the insert the new person and make the connection again.

Another example would be a scavenger hunt. You have a clue, and this clue is the pointer to the place where you can find the next clue. With this link, you go to the next place and get another clue that will lead to the next one. The only way to get a clue from the middle of the list is to follow the list from the beginning(from the first clue).

We have another example, which is the most popular one used to exemplify linked list; that of a train. A train consists of a series of vehicles(wagons). Each vehicle(wagon) is linked to each other. You can decouple a wagon, change its place, or add or remove it. Each wagon is an element of the list and the link between the wagons is the pointer.

![Wagon](https://res.cloudinary.com/dazskjikr/image/upload/v1558467819/linked_list_wagon.png)

There are different types of linked lists. In this tutorials, we are going to introduce you to the normal linked lists and all the operations we can carry out in a linked list. Check out the following  links about the Doubly linked list and the Circular linked list and modify the Linked-List class to work as a doubly linked list and circular linked list;

- ### [Doubly Linked-List](https://en.wikipedia.org/wiki/Doubly_linked_list)

 ![Doubly](https://res.cloudinary.com/dazskjikr/image/upload/v1558467818/doubly_linked_list.png)

In a normal linked list, we make the link from one node to the next node only, while in a doubly linked list, we have a double link: one for the next element and one for the previous element as shown above 👆.

- ### [Circular Linked-List](https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list)

The only difference between the circular linked list and the normal linked list is that the last element's next(`tail.next`) pointer does not make a reference to `null,` but to the first element(`head`).

![Circularly](https://res.cloudinary.com/dazskjikr/image/upload/v1558467816/circular_linked_list.png)



