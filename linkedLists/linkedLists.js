// 10 => 5 => 16
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
    // console.log(this.head); // { value: 10, next: null }
    const newNode = {
      // { value: 5, next: null }
      value,
      next: null,
    };
    this.tail.next = newNode;
    // console.log(this.head); // { value: 10, next: { value: 5, next: null } }
    this.tail = newNode;
    // console.log(this.head); // { value: 10, next: { value: 5, next: null } }
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
      this.append(value);
      return this.printList();
    }

    // let's say the linked list is like this [1,10,5,16,99] and insert(2,99)
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next; // { value: 5, next: { value: 16, next: { value: 99, next: null } } }
    // console.log(holdingPointer);
    // leader will point to newNode, and newNode will point to holdingPointer
    // leader(10)  holdingPointer(5)
    //         \   /
    //      newNode(99)

    // leader.next now will be newNode
    // holdingPointer still keeps 5 in the variable
    leader.next = newNode;
    // *   *
    //  \
    //   *

    newNode.next = holdingPointer;
    // *   *
    //  \ /
    //   *

    this.length++;
    return this.printList;
  }

  // Andrei's and my solution
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length - 1) {
      const leader = this.traverseToIndex(this.length - 2);
      leader.next = null;
      this.tail = leader;
      this.length--;
      return this.printList();
    }

    const leader = this.traverseToIndex(index - 1);
    // const removePointer = this.traverseToIndex(index);
    const removePointer = leader.next;
    leader.next = removePointer.next;
    this.length--;
    return this.printList();
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

  reverse() { // if it's [1, 10, 5, 16]
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head; // 1
    console.log("first: " + first);
    this.tail = this.head; // 1, but this.head.next still points to 10
    console.log("this.tail: " + this.tail.next.value);

    let second = first.next; // 10
    console.log("second: " + second);

    while(second) {
      const temp = second.next; // 10
      console.log("temp: " + temp);
      second.next = first; // 5 => 1
      console.log("second.next: " + second.next);
      first = second; // 10
      console.log("first in while loop: " + first);
      second = temp; // 10?
      console.log("second in while loop: " + second);

    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.append(99);
// myLinkedList.insert(0, 333);
myLinkedList.insert(6, 14);
// console.log(myLinkedList.length);
myLinkedList.remove(6);
console.log(myLinkedList.printList());
// myLinkedList.insert(2, 99);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.length);
myLinkedList.reverse();
console.log(myLinkedList.printList());


