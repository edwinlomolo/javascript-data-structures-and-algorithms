# Queues

Queues are very similar, but instead of LIFO, they use a very different principle known as **FIFO(First In First Out)**.

A queue is an ordered collection of items. Queues work with the principle of *first-come first-served*

The addition of new elements in a queue is at the tail, and the removal is from the front. The newest element added to the queue must wait at the end of the queue.

The most common popular example of a queue in real life is the typical line we form from time to time. We have lines for movies, the cafeteria, and a checkout line at a grocery store among other examples. The first person in the line is the first person to be attended to.

![Queue](https://res.cloudinary.com/dazskjikr/image/upload/v1558468748/queue.png)

We also have other types of queue:

### The priority queue

One modified version of the queue is the priority queue. Elements are added and removed based on a priority. An example from real life:

- boarding line at the airport; the first class passengers and the business class passengers get priority over the the coach class passengers. In some cases, elderly people and pregnant women(or women with newborn children) also get priority over other passengers for boarding.
- Waiting room for patients in a hospital(emergency department). Patients that are in a severe condition are seen by a doctor prior to patients in less severe condition. Usually, a nurse will do the triage and assign a code to a patient depending on the severity of the condition.

There are two options when implementing a priority queue: you can set the priority and add the element at the correct position, or you can queue the elements as they are added to the queue, and remove them according to priority.

We will go ahead and create the normal priority queue. Go a mile and modify the queue and come with a priority queue on your own. The normal queue will be your skeleton to start creating the priority queue algorithm.