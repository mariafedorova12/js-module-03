'use strict';
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	 this.books.splice(this.books.indexOf(oldName), 1, newName);
  
	
    // Change code above this line
  },
};
