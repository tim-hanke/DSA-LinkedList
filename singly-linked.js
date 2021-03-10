const LinkedList = require("./linked-list");

function main() {
  let SLL = new LinkedList();

  ["Starbuck", "Husker", "Helo", "Boomer", "Apollo"].forEach((item) =>
    SLL.insertFirst(item)
  );
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");
  // console.log(SLL);
  return SLL;
}

// main();

module.exports = main;
