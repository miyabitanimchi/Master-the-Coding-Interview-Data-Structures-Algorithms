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
      this.root === newNode;
    } else {
      let currentNode = this.root;
      while (currentNode.value !== null) {
        if (newNode.value < currentNode.value) {
          const holdingLeftTree = this.root.left;
          if (currentNode.left < newNode.value) {
          }
        }
      }
    }
  }

  lookup() {}

  remove() {}
}

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};
