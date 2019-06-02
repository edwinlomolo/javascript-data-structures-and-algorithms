# Graphs

Just like Binary Tree data structure, Graph is a nonlinear data structure.

A **graph** is an abstract model of a network structure. A graph is a set of **nodes**(or **vertices**) connected by **edges**. Learning about graphs is vital because any binary relationship can be represented by a graph.

Any social network, such as Facebook, Twitter, can be represented by a graph.

![Graph](https://res.cloudinary.com/dazskjikr/image/upload/v1558470233/graph.png)

We can also use graphs to represent, roads, flights, and communications.

A graph *G = (V, E)* is composed of:

- **V**: A set of vertices
- **E**: A set of edges connecting the vertices in *V*

## Graph Terminology

![Graph Terminology](https://res.cloudinary.com/dazskjikr/image/upload/v1558470502/graph_terminology.png)

Vertices connected by an edge are called **adjacent vertices**. For example, **A** and **D** are adjacent, **A** and **C** are adjacent, **A** and **B** are adjacent and **A** and **E** are *not* adjacent.

A degree of a vertex consists of the number of adjacent vertices. For example, **A** is connected to other 3 vertices, therefore, **A** has degree 3; **E** is connected to other two adjacent vertices, therefore, **E** has degree 2.

A path is a sequence of consecutive vertices, such as *v1, v2, v3, ..., vk*, where *vi* and *vi+1* are adjacent. Using the graph from the diagram above, we have the paths **A** **B** **E** **I** and **A** **C** **D** **G**, among others.

A simple path does not contain repeated vertices. As an example, we have the path **A** **D** **G**. A **cycle** is a simple path, except for the last vertex, which is the same as the first vertex: **A** **D** **C** **A**(back to **A**)

A graph is **acyclic** if it does not have cycles. A graph is connected if there is a path between every pair of vertices.

## Directed and Undirected graphs

Graphs can be **undirected**(where edges do not have direction) or **directed**(**digraph**), where edges have direction.

![Directed Undirected Graph](https://res.cloudinary.com/dazskjikr/image/upload/v1558471550/directed_graph_undirected_graph.png)

A graph is **strongly directed** if there is a path in both directions between every pair of vertices. For example, **C** and **D** are strongly connected, while **A** and **B** are not strongly connected.

Graphs can also be **unweighted**(as we have noted so far) or **weighted**(in which the edges have weights,) as shown in the diagram below

![Weighted Unweighted Graph](https://res.cloudinary.com/dazskjikr/image/upload/v1558471618/unweighted_graph.png)

We can solve many problems in the computer science using graphs, such as

- searching a graph for a specific vertex
- searching for a specific edge
- finding a path in the graph(from one vertex to another)
- finding the shortest path between two vertices
- cycle detection

## Representing a graph

There are a few ways in which we can represent graphs when it comes to data structure. There is no correct way of representing a graph among the existing possibilities. It depends on the type of problem you need to solve and the type of graph as well.

### The adjacency matrix

This is the most common implementation of graphs using adjacency matrix. Each node is associated with an integer, which is an array index. We will represent the connectivity between vertices using a two-dimensional array, as `array[i][j] === 1` if there is an edge from the node with index *i* to the node with index *j* or as `array[i][j] === 0` otherwise, as demonstrated by the below diagram:

![Adjacency Matrix](https://res.cloudinary.com/dazskjikr/image/upload/v1558471684/adjacency_matrix.png)

Graphs that are not strongly connected(**sparse graphs**) will be represented by a matrix with many entries in the adjacency matrix. This means that we would waste space in the computer memory to represent edges that do not exist; for example, if we need to find the adjacent vertices of a given vertex, we will have to iterate through the whole row even if this vertex has only one adjacent vertex. Another reason this might not be a good representation is that the number of vertices in the graph may change, and a two-dimensional array is not flexible.

### The adjacency list

We can use dynamic data structure to represent graphs as well, called an **adjacency list**. This consists of a list of adjacent vertices for every vertex of the graph. There are a few different ways we can represent this data structure. To represent the list of adjacent vertices, we can use a list(array), a linked list, or even a hash map or dictionary.

![Real Adjacency Matrix](https://res.cloudinary.com/dazskjikr/image/upload/v1558471745/real_adjacency_matrix.png)

Both representations are very useful and have different properties(for example, finding out whether the vertices `v` and `w` are adjacent is faster using adjacency matrix), although adjacency lists are probably better for most problems. We are going to use adjacency list representation for the examples in this tutorial.

### The incidence matrix

We can also represent a graph using the **incidence matrix**. In an incidence matrix, each row of the matrix represents a vertex, and each column represents an edge. We represent the connectivity between two objects using a two-dimensional array, as `array[v][e] === 1` if the vertex `v` is incident upon edge `e` or as `array[v][e] === 0` otherwise, as shown below:

![Incidence Matrix](https://res.cloudinary.com/dazskjikr/image/upload/v1558471803/incidence_matrix.png)

An incidence matrix is usually used to save space and memory when we have more edges than vertices.

### Graph traversals

Similar to the tree data structure, we can also visit all the nodes of a graph. There are two algorithms that can be used to traverse a graph, called **breadth-first search** (**BFS**) and **depth-first search** (**DFS**). Traversing a graph can be used to:

- find a specific vertex or path between two vertices
- check whether the graph is connected
- check whether the graph contains cycles

The idea of graph traversal algorithms is that we must track each vertex when we first visit it and keep track of which vertices have not yet been completely visited. For both traversal algorithms, we need to specify which will be the first vertex to be visited.

To completely explore a vertex, we need to look at each edge of this vertex. For each edge connected to the vertex that has not been visited yet, we will mark it as discovered and add it to the list of vertices to be visited.

In order to have efficient algorithms, we must visit each vertex twice at the most when each of its endpoints is explored. Every edge and vertex in the connected graph will be visited.

The BFS and DFS algorithms are basically the same with only one difference, which is the data structure used to store the list of vertices to be visited.

| **Algorithm** | **Data Structure** | **Description**                                              |
| ------------- | ------------------ | ------------------------------------------------------------ |
| DFS           | Stack              | By storing the vertices in a stack, the vertices are explored by lurching along a path, visiting a new adjacent vertex if there is no one available. |
| BFS           | Queue              | By storing the vertices in a queue, the oldest unexplored vertices are explored first. |

When marking the vertices that we have already visited, we will use three colors to reflect their status:

- **White**: This represents that the vertex has not been visited.
- **Grey**: This represents that the vertex has been visited but not explored.
- **Black**: This represents that the vertex has been completely explored.

This is why the vertex must be visited twice at most.

### Breadth-First-Search (BFS) algorithm

BFS algorithm starts traversing the graph from the first specified vertex and visits all of its neighbors(adjacent vertices) first, one layer of the graph at a time.

It visits the vertices first widely and then deeply.

![BFS](https://res.cloudinary.com/dazskjikr/image/upload/v1558471872/bfs.png)

Pseudo code for the BFS algorithm, starting at vertex `v`:

-  Create a queue `Q`
- Mark `v` as discovered(grey) and enqueue `v` into `Q`
- While `Q` is not empty, perform the following steps:
  - Dequeue `u` from `Q`
  - Mark `u` as discovered(grey)
  - Enqueue all the unvisited(white) neighbors `w` of `u`
  - Mark `u` as explored(black)

### Depth-First-Search algorithm

The DFS algorithm will start traversing the graph from the first specified vertex, will follow a path until the last vertex of this path is visited, will then backtrack, and will finally follow the next path.

DFS algorithm visits the vertices first deeply and then widely.

![DFS](https://res.cloudinary.com/dazskjikr/image/upload/v1558471934/depth_first_search.png)

The DFS algorithm does not need a source vertex. In the DFS algorithm, for each unvisited vertex `v` in Graph `G`, visit the vertex `v`.

To visit vertex `v`, we perform the following steps:

- Mark `v` as discovered(grey)
- For all unvisited(white) neighbors `w` of `v` , visit the vertex `w` and mark `v` as explored(black)

## Shortest path algorithms

Given a map of a street, consider you want to get from point **A** to point **B** using the shortest path possible. We can use, as an example for this problem, the way from **Santa Monica Blvd** to **Hollywood Blvd** in Los Angeles.

![Shortest Path](https://res.cloudinary.com/dazskjikr/image/upload/v1558472022/shortest_path_graph.png)

This is a very common problem in our lives, and we will use apps such as *Apple* or *Google Maps* to try to solve it, especially if you live in a big city. We also have other constraints involved, such as time or car traffic, but the original problem remains: how do we get from point **A** to point **B** using the shortest path?

We can use graphs to solve this problem for us.  There are two famous shortest path algorithm, which are **Dijkstra's algorithm** and **Floyd-Warshall algorithm**.

In this section, we covered how to implement a graph data structure, how to traverse a graph(the Breadth-First-Search algorithm and the Depth-First-Search algorithm). 

To get into in-depth details about graphs and various graphs algorithms such as MST(minimum spanning tree), Dijkstra and the Floyd-Warshall shortest path algorithms, Kruskal's algorithm, checkout out the links below:

[Shortest path algorithms](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

[Minimum Spanning Tree(MST)](https://en.wikipedia.org/wiki/Minimum_spanning_tree)

