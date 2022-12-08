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

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    console.log(this.head); // { value: 10, next: null }
    const newNode = { // { value: 5, next: null }
      value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    console.log(this.head); // { value: 10, next: { value: 5, next: null } }
    this.length++;
    return this; // this just references what this classe is that gets instantiated
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
console.log(myLinkedList);