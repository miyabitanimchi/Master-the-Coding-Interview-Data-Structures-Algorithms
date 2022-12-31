/* Note: Usually we don't create a binary search tree from scratch 
but we use a library instead such as this, https://vasiliyaltunin.github.io/arboreal.js/ */

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      // console.log("here");
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          // console.log(this);
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          // console.log(this);
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  // remove(value) {
  //   if (!this.root) return false;

  //   let currentNode = this.root;
  //   let parentNode = null;
  //   while (currentNode) {
  //     if (value < currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.right;
  //     } else if (currentNode.value === value) {
  //       // there will be 3 options
  //       // 1. when the current node has no right child
  //       if (currentNode.right === null) {
  //         if (parentNode === null) {
  //           this.root = currentNode.left;
  //         }
  //       } else {
  //         // 2. Right child which doesn't have a left child
  //         if (currentNode.right.left === null) {
  //           if (parentNode === null) {
  //             this.root = currentNode.left;
  //           } else {
  //             currentNode.right.left = currentNode.left;
  //           }
  //         }
  //         // 3. Right child which has a left child
  //       }
  //     }
  //   }
  // }
}

const traverse = (node) => {
  console.log(node);
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

const newTree = new BinarySearchTree();
newTree.insert(9);
newTree.insert(4);
newTree.insert(6);
newTree.insert(20);
newTree.insert(170);
newTree.insert(15);
newTree.insert(1);
console.log(newTree.lookup(9));
// JSON.stringify(traverse(newTree.root));
