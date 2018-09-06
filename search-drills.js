const BinarySearchTree = require('./bst-class.js');

// Find a Book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?
// 10 categories with sub categories

// A binary search would be good for searching through this collection of books based on how they are organized. With a binary search, you could eliminate categories first and then eliminate the sub categories until you found the correct one that houses the book you're looking for.


// Tree Traversal
// Using your Binary Search Tree class, create a Binary Search Tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Implement in-order, pre-order, and post-order functions. Check your answers:

const searchTree = new BinarySearchTree();

searchTree.insert(25);
searchTree.insert(15);
searchTree.insert(50);
searchTree.insert(10);
searchTree.insert(24);
searchTree.insert(35);
searchTree.insert(70);
searchTree.insert(4);
searchTree.insert(12);
searchTree.insert(18);
searchTree.insert(31);
searchTree.insert(44);
searchTree.insert(66);
searchTree.insert(90);
searchTree.insert(22);

// searchTree.preOrder();
return searchTree.inOrder();