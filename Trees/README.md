# Trees

This is a non-sequential data structure which is very useful for storing information that needs to be found easily.

We will cover the following:

* Tree terminology
* Creating a tree data structure
* Traversing a tree
* Adding and removing nodes

## The tree data structure

A tree is an abstract model of a hierarchical structure. The most common example of a tree in real life would be a family tree or a company organisational chart.

![Tree](https://res.cloudinary.com/dazskjikr/image/upload/v1558469058/tree_ds.png)

## Tree terminology

![Image of a tree data structure](https://res.cloudinary.com/dazskjikr/image/upload/v1548754268/binary-tree-to-DLL.png)

A tree consists of nodes with a parent-child relationship. Each node has a parent(except for the first node at the top) and zero or more children.

The top node of a tree is called the **root**(**1**). It is the node that does not have a parent. Each element of a tree is called a node. There are **internal nodes** and **external nodes**. An internal node is a node with atleast one child(**2**,**4**,**5**,**3**,**6**, and **7** are internal nodes). A node that does not have children is called an external node or leaf(**8**,**9**,**10**,**11**,**13**, and **14** are leaves).

A node can have **ancestors** and **descendants**. The ancestors of a node(except the root) are parents, grandparent, great-grandparent, and so on. The descendants of a node are children, grandchildren, great-grandchildren, and so on. For example, node 4 has 2 and 1 as its ancestors and **8** and **9** as its descendants.

A **Subtree** consists of a node and its descendants. For example, **5**,**10**, and **11** constitute a subtree from the tree.

The **depth** of a node consists of the number of ancestors. For example, node **8** has a depth of 3 because it has three ancestors(**4**,**2**, and **1**).

The **height** of a tree consists of the maximum depth of any node. The tree can also be broken down into levels. The root node is always on **level 0**, its children are on **level 1**, and so on.

## The binary and binary search trees.

A node in a binary tree has two children at most: one left child and one right child. This definition allows us to write more efficient algorithms to insert, search, and delete nodes to/from a tree. Binary trees are largely used in computer science.

A binary search tree is a binary tree, but it only allows us to store nodes with lesser values on the left-hand side and nodes with greater values on the right-hand side.
