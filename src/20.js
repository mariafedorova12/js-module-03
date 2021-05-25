'use strict';
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
 // Change code below this line
let price = 0;
 for (const product of products)
  if(productName === product.name) {
    price = product.price * product.quantity;
  }
  return price;

// Change code above this line
}
