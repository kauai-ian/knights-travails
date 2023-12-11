/**
 * Constants defining the minimum and maximum boundaries of the chessboard.
 */
const min = 0;
const max = 7;

/**
 * A map to keep track of visited squares.
 */
const visited = new Map();

/**
 * An array defining all possible moves for a knight in chess.
 * Each sub-array represents the x and y offsets for a move.
 */
const possibleMoves = [
  [1, 2],
  [-1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
];

/**
 * Calculates all possible moves from a given position on the chessboard.
 *
 * @param {number[]} position - The current position [x, y] on the chessboard.
 * @returns {number[][]} An array of possible new positions after the move.
 */
function getPossibleMoves([x, y]) {
  return possibleMoves.map(([xMove, yMove]) => {
    const newX = x + xMove;
    const newY = y + yMove;

    // Check if the new position is within the bounds of the chessboard
    if (newX >= min && newX <= max && newY >= min && newY <= max) {
      return [newX, newY];
    }
  });
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
  const y = sqY;
  let parent = sqParent;
  let moves = getPossibleMoves([x, y]).filter(Boolean)

  // Define methods to get and set the parent square
  const getParent = () => parent;
  const setParent = (parentSq) => (parent ||= parentSq);

  // Define methods to get the square's name and available moves
  const getName = () => `${x}, ${y}`;
  const getMoves = () => moves;

  // Store the square in the visited map if not already visited
  if (!visited.has(getName())) {
    const sq = { getParent, parent, getMoves, getName, setParent };
    visited.set(getName(), sq);
    return sq;
  }
}

/**
 * Calculates the shortest path for a knight on a chessboard from the start coordinates to the finish coordinates.
 *
 * @param {number[]} startCoords - The coordinates of the starting position [x, y].
 * @param {number[]} finishCoords - The coordinates of the finishing position [x, y].
 * @returns {string[]} The path of coordinates representing the shortest path.
 * @throws {TypeError} If startCoords or finishCoords are not arrays.
 * @throws {Error} If the coordinates are out of bounds.
 */
 function knightMoves(startCoords, finishCoords) {
  // Validate input coordinates
  if (!Array.isArray(startCoords) || !Array.isArray(finishCoords)) {
    throw new TypeError('Start and Finish points must be an array');
  } else if (
    [...startCoords, ...finishCoords].some((i) => i > max || i < min)
  ) {
    throw new Error(
      `The values may not be larger than ${max} or smaller than ${min}`
    );
  }

  // Clear the visited map and initialize the finish square
  visited.clear();
  const finish = square(finishCoords, 'finish');

  // Use a queue for breadth-first search
  let queue = [finish];

  let startName = startCoords.join(', ');

  // Search for the start square using breadth-first search
  while (!queue.find((i) => i.getName() === startName)) {
    const currSquare = queue.shift();

    // Enqueue all possible moves from the current square
    const enqueueList = currSquare
      .getMoves()
      .map((mCoords) => square(mCoords, currSquare))
      .filter(Boolean);
    queue.push(...enqueueList);
  }

  // Retrace the path from start to finish
  const start = visited.get(startName);

  let path = [];
  let currSq = start;
  while (currSq?.getParent?.()) {
    path.push(currSq.getName());
    currSq = currSq?.getParent?.();
  }

  // Log and return the shortest path
  const message = console.log(`The shortest path was ${path.length - 1} move${
    path.length - 1 > 1 ? 's' : ''
  }!
  The moves were:
  ${path.join('\n')}
    `);

  return { path, message };
}
knightMoves([3, 3], [0, 0]);
