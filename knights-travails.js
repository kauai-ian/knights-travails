// build a function knightmoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

// board
// 7 spaces on the x axis and 7 on the y
// 49 pair combinations

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
  this.AdjList.get(v).push(w); // get the list for vertex v and put the vertex w donting edge between v and w.
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
// breadth first search -

// Get and set current coordinates to the board
//dynamic function that takes multiple x and y coordinates and a predecessor.

// define an array for hardcoded possible moves of Knight
// all the moves that the knight could make in an array (1,2), (1,-2)

// name to hold  x and y ( template literals)

//Evaluate current possible knight moves against offsets and returns array of knightmoves.

// get / set map constructor object name(s)
// if the square has a name return the square name
// otherwise create a new square, set up the identity, and return
