// build a function knightmoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

// board
// 7 spaces on the x axis and 7 on the y
// 49 pair combinations
//Factory Queue
const createQueue =  () => {
  const queue = []
  const enqueue = (element) => {
    queue.push(element)
  }
  const dequeue = () => {
    if(isEmpty()) {
      return "dequeued"
    }
    return queue.shift()
  }
  const isEmpty = () => {
    return queue.length === 0
  }
  return {
    enqueue, dequeue, isEmpty,
  }
}
const myQueue = createQueue()
myQueue.enqueue(5)
myQueue.enqueue(10)
myQueue.enqueue(15)

console.log(myQueue.dequeue())
console.log(myQueue.isEmpty())
console.log(myQueue.dequeue())
console.log(myQueue.isEmpty())
console.log(myQueue.dequeue())
console.log(myQueue.isEmpty())


// Factory of vertices
const node = function (vertices) {
  return {
    noOfVertices: vertices, // store number of vertices in graph
    AdjList: new Map(), // key of map holds a vertex and values hold an array of an adjacent node.
  
// add vertex to graph
addVertex(v) {
  // add vertex V to adjList and ititializes its values w/ an array
  // initialize the adjacent list with a null array
  this.AdjList.set(v, []);
},

// add eddge to graph
 addEdge(v, w) {
  // adds an edge between the source and the destination (v and w)
  this.AdjList.get(v).push(w); // get the list for vertex v and put the vertex w denoting edge between v and w.
  this.AdjList.get(w).push(v); // since graph is undirected, add an edge from w to v also
},

printGraph() {
  let get_keys = this.AdjList.keys(); // get all vertices
  for (let i of get_keys) {
    // iterate over vertices
    let get_values = this.AdjList.get(i); // get corresponding adjacency list for the vertex
    let concat = "";

    for (let k of get_values) {
      // iterate over adjacency list.
      concat += k + " "; // concatenate the values into a string
    }
    console.log(i + " -> " + concat); // print the vertex and its adjacency list
  }
},

// breadth first traversal for a graph -
// starting node
breadthFirstSearch(startingNode, graph) {
  // visited object created
  let visited = {}
  // create a queue
  let q = createQueue();
  // add the starting node to the queue
  visited[startingNode] = true;
  q.enqueue(startingNode);
  // loop until the queue is empty
  while(!q.isEmpty()) {
    let getQueueElement = q.dequeue() // get the element from the queue
    console.log(getQueueElement) // passing the current vertex to callback function
  let get_list = this.AdjList.get(getQueueElement) // get the adjacent list for current vertex
  for (let i in get_list) {
    let neigh = get_list[i];
  
    if (!visited[neigh]) {
      visited[neigh] = true;
      q.enqueue(neigh)
    }
  } // loop through the list and add the element to the queue if it is not processed yet
  }
  },
}
}



// implement above
let g = node(6);
let vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i])
}

// adding edges
g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')
g.addEdge('B', 'C')
g.addEdge('D', 'E')
g.addEdge('E', 'F')
g.addEdge('E', 'C')
g.addEdge('C', 'F')

g.printGraph()

console.log("search")
g.breadthFirstSearch('A')



// Get and set current coordinates to the board
//dynamic function that takes multiple x and y coordinates and a predecessor.

// define an array for possible moves of Knight
// all the moves that the knight could make in an array (1,2), (1,-2)



