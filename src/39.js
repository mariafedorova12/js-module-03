'use strict';
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const indexOf = this.potions.indexOf(potionName)
       this.potions.splice(indexOf, 1);
      
       return this.potions;
    // Change code above this line
  },
};
