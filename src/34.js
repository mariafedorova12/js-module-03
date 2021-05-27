'use strict';
const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`
  },
  // Change code above this line
};


console.table(bookShelf.getBooks());
console.table(bookShelf.addBook("Haze"));
console.table(bookShelf.removeBook("Red sunset"));
console.table(bookShelf.updateBook("Sands of dune", "Dune"));

