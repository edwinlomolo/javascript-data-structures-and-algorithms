# Hash table

In this section, you will learn about `HashTable` class, also known as `HashMap`, a hash implementaion of the `Dictionary` class.

**Hashing** consists of finding a value in a data structure in the shortest time possible. When we use a hash function, we already know which position the value is in, so we can simply retrieve it.

A hash function is a function, that given a key, will return an address in the table where the value is. The hash function which we are going to use is the most common one, called a lose lose hash function, in which we simply sum the ASCII values of each character of the key length.
