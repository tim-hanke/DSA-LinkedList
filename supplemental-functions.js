const supplementalFunctions = {
  display(SLL) {
    let listArray = [];

    if (!SLL.head) {
      return null;
    }

    let currNode = SLL.head;

    while (currNode.next !== null) {
      listArray.push(currNode.value);
      currNode = currNode.next;
    }

    listArray.push(currNode.value);

    console.log(listArray.join(",\n"));
  },
  size(SLL) {
    // if there is no head, then the list has zero size
    if (!SLL.head) {
      return 0;
    }

    // if there is a head, then the linked list has
    // at least one entry, so we'll start at one
    let listSize = 1;

    let currNode = SLL.head;

    // while there are still more nodes, we add to listSize
    while (currNode.next !== null) {
      listSize++;
      currNode = currNode.next;
    }

    return listSize;
  },
};

const main = require("./singly-linked");

let SLL = main();
supplementalFunctions.display(SLL);
console.log(supplementalFunctions.size(SLL));
