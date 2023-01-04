// Edge List
// [0, 2] 0 and 2 are connected together, [2, 3] 2 and 3 are connected together so on and so forth
const graphEL = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
// the index is the node and the value is the nodes neighbors
// in this case node 0 (index 0) is connected to 2, node 1 is to 2 and 3...
// each item doesn't have to be an array
const graphAL = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
// have 0s and 1s, 0 means no and 1 means
// can be an object
const graphAM = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
