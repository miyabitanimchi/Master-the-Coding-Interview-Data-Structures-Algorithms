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
      console.log("here");
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          console.log(this);
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          console.log(this);
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup() {}

  remove() {}
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
JSON.stringify(traverse(newTree.root));
