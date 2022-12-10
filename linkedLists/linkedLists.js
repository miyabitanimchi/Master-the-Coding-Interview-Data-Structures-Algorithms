// 10 => 5 => 16

// Linked list looks something like this
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null // null terminated
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    console.log(this.head); // { value: 10, next: null }
    const newNode = {
      // { value: 5, next: null }
      value,
      next: null,
    };
    this.tail.next = newNode;
    console.log(this.head); // { value: 10, next: { value: 5, next: null } }
    this.tail = newNode;
    console.log(this.head); // { value: 10, next: { value: 5, next: null } }
    this.length++;
    return this; // this just references what this classe is that gets instantiated
  }

  // my solution
  // prepend(value) {
  //   const newNode = {
  //     value,
  //     next: this.head
  //   }
  //   this.head = newNode;
  //   this.length++;
  //   return this;
  // }

  // Andrei's solution
  prepend(value) {
    const newNode = {
      value,
      next: null, // null here
    };

    // or we can use Node class
    // const newNode2 = new Node(value);
    // console.log(newNode2);

    newNode.next = this.head; // assign this.head here
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // check params
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(1, 100);
console.log(myLinkedList.printList());
