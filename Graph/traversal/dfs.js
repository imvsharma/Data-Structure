/**
 *  Implementation of stack, which will use in Iterative version of Depth First Search
 */
 class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
}

/**
 *  Implementation of Graph Data Structure
 */
class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(src, dest) {
    if (!this.vertices[src] || !this.vertices[dest]) return;

    if (!this.vertices[src].includes(dest)) this.vertices[src].push(dest);

    if (!this.vertices[dest].includes(src)) this.vertices[dest].push(src);
  }

  print() {
    Object.keys(this.vertices).forEach((key) => {
      let str = "";
      this.vertices[key].forEach((ele) => {
        str = str + ele + " ";
      });
      console.log(`${key} ==> ${str}`);
    });
  }

  dfsByRecursion(vertex) {
    let visited = {};
    this.dfsUtil(vertex, visited);
  }

  dfsUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    let neighbours = this.vertices[vertex];
    for (let neighbour of neighbours) {
      if (!visited[neighbour]) {
        this.dfsUtil(neighbour, visited);
      }
    }
  }

  dfsByIterative(vertex) {
    // Create a empty visited object and initialize a stack
    let visited = {};
    let stack = new Stack();

    // Push the given vertex into stack and mark as visited object
    stack.push(vertex);
    visited[vertex] = true;

    // Running the while loop till stack will empty
    while (!stack.isEmpty()) {
      // Pop the item from stack
      let popEle = stack.pop();
      console.log(popEle);

      // find out all adjacent nodes of popped item
      let neighbours = this.vertices[popEle];

      // looping all adjacent nodes and check its visited or not.
      // If not visited, push into stack and mark as visited
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
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
graph.print();
console.log("=================");
graph.dfsByRecursion("A");
console.log("=================");
graph.dfsByIterative("A");
