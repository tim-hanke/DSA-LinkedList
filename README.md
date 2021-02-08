# Assignment

Create a GitHub repo called "DSA-LinkedList". Save all this work in the repo and submit the repo via the submission box at the end of this checkpoint.

In these drills, you'll practice creating a linked list, implementing its core, and some supplemental operations. You will also use your linked list to solve interview questions. Don't forget to assess the big O for each of these exercises. Start each problem by stating 1 or more sample inputs and outputs.

## Create a linked list class

Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (`insertFirst`, `insertLast`, `remove`, `find`) from scratch.

## Creating a singly linked list

- Write a function `main`. Within the function, using the linked list class above, create a linked list with the name `SLL` and add the following items to your linked list: `Apollo`, `Boomer`, `Helo`, `Husker`, `Starbuck`.
- Add `Tauhida` to the list.
- Remove `Husker` from the list.
- Implement a function called `insertBefore()` in the class that inserts a new node before a given node containing a key.
- Implement a function called `insertAfter()` in the class that inserts a new node after a node containing the key.
- Implement a function called `insertAt()` that inserts an item at a specific position in the linked list.
- Add `Athena` before `Boomer` using your `insertBefore()` function.
- Add `Hotdog` after `Helo` using the `insertAfter()` method.
- Using the `insertAt()` method insert `Kat` in the 3rd position of the list.
- Remove `Tauhida` from the list.

## Supplemental functions for a linked list

Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

- `display`: displays the linked list
- `size`: returns the size of the linked list
- `isEmpty`: finds if the list is empty or not (without using the `size()` function)
- `findPrevious`: finds the node before the item you are looking for
- `findLast`: returns the last node in the linked list

## Mystery program

Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

```
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```

## Reverse a list

Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

## 3rd from the end

Write an algorithm to find the 3rd element from the end of a linked list. _Note_ You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

## Middle of a list

Write an algorithm to find the middle element of a linked list. _Note_ You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the `size()` function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

## Cycle in a list

Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its `next` value pointing to an earlier node in the list). For this exercise, create a linked list with the name `CycleList`. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a `cycleList` function.

## Sorting a list

Write an algorithm that will sort a given linked list. For example given a list such as `3->2->5->7->1`, your program will output the sorted version of this list which will be `1->2->3->5->7`. You may not use another list or any other data structure such as an array to store the data.
