class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;
    let currNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    prevNode.next = currNode.next;
  }

  find(item) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  insertAfter(item, target) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;

    while (currNode !== null && currNode.value !== target) {
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    currNode.next = new _Node(item, currNode.next);
  }

  insertBefore(item, target) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === target) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;
    let currNode = this.head;

    while (currNode !== null && currNode.value !== target) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    prevNode.next = new _Node(item, currNode);
  }

  insertAt(item, position) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;
    let count = 1;

    while (currNode !== null && count < position) {
      count++;
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    prevNode.next = new _Node(item, currNode);
  }
}

module.exports = LinkedList;
