'use strict';
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
 const indexOf = this.potions.indexOf(oldName)
       this.potions.splice(indexOf, 1, newName);
      
       return this.potions;
    // Change code above this line
  },
};