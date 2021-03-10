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
};

const main = require("./singly-linked");

let SLL = main();
supplementalFunctions.display(SLL);
