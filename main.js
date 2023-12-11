// queue helper
const createQueue = () => {
  const queue = [];
  const enqueue = (element) => {
    queue.push(element);
  };
  const dequeue = () => {
    if (isEmpty()) {
      return "dequeued";
    }
    return queue.shift();
  };
  const isEmpty = () => {
    return queue.length === 0;
  };
  return {
    enqueue,
    dequeue,
    isEmpty,
  };
};

// add edge helper
function addEdge(adj, u, v) {
  adj[u].push(v);
  adj[v].push(u);
}

function graph() {
  const chessboard = new Map(); // stores our vertex and values hold an array of adjacent node

  // create the board 8x8 by looping a loop for x and y (counting 0)
  const addVertices = (size = 8) => {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        chessboard.set(`${[x, y]}`, []); // string vertices key, the values of the vertices to an empty array
      }
    }
  };

  // add move to adjacency list of the current position on the board
  // only if the move is allowable and has not been done already
  // contains the hard code.
  const addEdges = (board = chessboard) => {
    const min = 0;
    const max = 7;
    const possibleMoves = [
      [2, 1],
      [1, 2],
      [2, -1],
      [1, -2],
      [-2, 1],
      [-1, 2],
      [-2, -1],
      [-1, -2],
    ];
    // iterate through each possible square to find its next position
    board.forEach((position) => {
      if(typeof position !== "string") {
        position = position.toString()
      }
      console.log( position)
      const [x, y] = position.split(","); // extracts coordinates from key
      const moves = [];
      for(i=0; i< possibleMoves.length; i++) {
        const [dx, dy] = possibleMoves[i]
        const nextX = parseInt(x) + dx;
        const nextY = parseInt(y) + dy;

        //check if position is on the board
        if (nextX >= min && nextX <= max && nextY >= min && nextY <= max) {
          moves.push(`${newX},${newY}`);
        }
      };

      moves.forEach((move) => {
        addEdge(chessboard, position, move);
      });
    });
  }
    



  const knightMoves = (start, finish) => {
// initialize queue

    // initiate a boolean to check if visited
    // mark visited the current square




  };


  const breadthFirstSearch = () => {};
  // start w/ finish and work backwards. as opposed to forwards.
  // once the coordinates i am looking for are in the queue, then the while loop can stop, instead of going over all points in board.
  // if siblings are already visited, we dont want to add them to the queue. IE would have seen all of its paths.
  // use map to say this ones already here, so I dont want to visit it again.
  // queue can be a regular array and a adjacent list to give us the paths. Shift and push function as queue and dequeue.
  // neighbors we know are always a fixed number away, so we can write coordinates of which way we can go.
  // loop through all neighbors, enqueue them, and when you find the one you want, it pops out. The for loop can go through 8 neighbors.
  // grab queue piece and traverse back up list.
  // from the youtube video he is going all the way to empty but AJ thinks we should pop out.
  // if we are looking for shortest, we can tie in the previous move, and grab that path.
  return {
    chessboard,
    addVertices,
    addEdges,
  };
}

const g = new graph();
g.addVertices();
g.addEdges();
console.log(g.chessboard);
