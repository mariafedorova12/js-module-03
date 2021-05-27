'use strict';
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
        return this.potions;
    },
  
    addPotion(potionName) {
        this.potions.push(potionName);
    },
  
    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name === potionName) {
                this.potions.splice(i, 1);
                return this.potions
            }
        }
    },
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name == oldName) {
                this.potions[i].name = newName;
                this.potions.splice(i, 1, this.potions[i]);
                return this.potions
            }
        }
    }
}
  // Change code above this line