/**
 * Implementation of Queue class which will used in BFS traversal
 */
 class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
}


/**
 * Implementation of Graph
 */
class Graph {
  constructor() {
    this.vertices = {};
  }

  // add vertex in graph
  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  // add edge in graph
  addEdge(src, dest) {
    if (!this.vertices[src] || !this.vertices[dest]) return;

    if (!this.vertices[src].includes(dest)) this.vertices[src].push(dest);

    if (!this.vertices[dest].includes(src)) this.vertices[dest].push(src);
  }

  // print the graph 
  print() {
    Object.keys(this.vertices).forEach((key) => {
      let str = "";

      this.vertices[key].forEach((item) => {
        str = str + item + " ";
      });

      console.log(`${key} ==> ${str}`);
    });
  }

  bfs(vertex) {
    // step 1 : create a empty visited object and initialise a queue
    let visited = {};
    let queue = new Queue();

    // step 2 : enqueue first vertex in queue and add that vertex as visited
    queue.enqueue(vertex);
    visited[vertex] = true;

    // create a while loop until queue is empty
    while (!queue.isEmpty()) {

      //dequeue the front element of queue
      let visitedVertex = queue.dequeue();
      console.log(visitedVertex);

      //find all adjacent vertices of current vertex
      let neighbours = this.vertices[visitedVertex];

      // looping on all adjacent vertices and checking if adjacent vertices is
      //  visited or not. If not visited, add that adjacent vertex into queue and
      //  mark as visited
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          queue.enqueue(neighbour);
          visited[neighbour] = true;
        }
      }
    }
  }
}

const graph = new Graph();
const vertices = ["A", "B", "C", "D", "E", "F"];
vertices.forEach((vertex) => {
  graph.addVertex(vertex);
});

graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");
graph.bfs("A");
