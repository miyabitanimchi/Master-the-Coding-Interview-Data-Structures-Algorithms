class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            previous: null,
            next: null,
        };
        this.tail = this.head;
        this.lengh = 1;
    }

    append(value) {
        const newNode = new Node(value);
        // const newNode = {
        //     value,
        //     previous: null,
        //     next: null
        // }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.lengh++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.lengh++;
        return;
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
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower.previous = newNode;

    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
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

        const removePointer = this.traverseToIndex(index);
        removePointer.previous.next = removePointer.next;
        removePointer.next.previous = removePointer.previous;
        this.length--;
        return this.printList();
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

const myLinkedList = new DoublyLinkedList(1);
myLinkedList.append(3);
// myLinkedList.append(4);
myLinkedList.insert(1, 2);
myLinkedList.remove(1)
console.log(myLinkedList);
console.log(myLinkedList.printList());