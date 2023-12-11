/**
 * A map to keep track of visited squares.
 */
const visited = new Map(); // keep track of visited squares
/**
 * An array defining all possible moves for a knight in chess.
 * Each sub-array represents the x and y offsets for a move.
 */
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

const min = 0;
const max = 7;

// calculate all possible moves
function getPossibleMoves([x, y]) {
  return possibleMoves
    .map(([xMove, yMove]) => {// offset is another way of saying move. Restructuring what is being passed in. Each parameter passed in will be a value, and each value is given a variable name
      const newX = x + xMove;
      const newY = y + yMove;

      // check if position is within bounds of chessboard
      if (newX >= min && newX <= max && newY >= min && newY <= max) {
        return [newX, newY]; // returns array of square objects
      }
      
    })
    
}

/**
 * Creates and returns a square object with various properties and methods.
 *
 * @param {number[]} coords - The coordinates of the square [x, y].
 * @param {any} parent - The parent square from which this square was reached.
 * @returns {object} An object representing the square with its properties and methods.
 */
function square([sqX, sqY], sqParent) {
  const x = sqX;
  const y = sqY; // store the x and y squares in variables
  let parent = sqParent; // passing in parameter
  let moves = getPossibleMoves([x, y]).filter(Boolean); // ARRAY. changed from getAvailMoves. Also missing filter boolean.

  // Define the methods to get and set the parent square
  const getParent = () => parent;
  const setParent = (parentSq) => (parent ||= parentSq);

  // Define the methods to get the squares name and available moves
  const getName = () => `${x}, ${y}`;
  const getAvailMoves = () => moves;

  // Store the square in the visited Map if not already visited, to prevent getting the same name.
  if (!visited.has(getName())) {
    const sq = { getParent, parent, getAvailMoves, getName, setParent }; //storing these functions
    visited.set(getName(), sq); // set square to have the properties
    return sq;
  }
}

function knightMoves(startCoords, finishCoords) {
  visited.clear();
  const finish = square(finishCoords, "finish"); // initialize finish square

  // use queue for breadth first search
  let queue = [finish];

  let startName = startCoords.join(", ");

  // searh for the start square
  visited.set(finish.getName(), true); // mark finish square as visited
  while (!queue.find((i) => i.getName() === startName)) {
    // while this queue doesnt have this square, we continue
    const currSquare = queue.shift();

    const availableMoves = currSquare.getAvailMoves(); //enqueue all possible moves from current square
    const enqueueList = [];
    availableMoves.forEach((moveCoords) => {
      const nextSquare = square(moveCoords, currSquare);
      if (nextSquare) {
        enqueueList.push(nextSquare);
      }
    });
    queue.push(...enqueueList);
  }

  // Retrace path from start to finish
  const start = visited.get(startName);

  let path = [];
  let currSq = start;
  while (currSq?.getParent?.()) {
    path.push(currSq.getName());
    currSq = currSq?.getParent?.();
  }

  // log and return the shortest path
  const message = console.log(`The shortest path is ${path.length - 1} move ${
    path.length - 1 > 1 ? "s" : ""
  }! 
The moves were: ${path.join("\n")}
`);
  return { path, message };
}
knightMoves([3, 3], [0, 0]);
