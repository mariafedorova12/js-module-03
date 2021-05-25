'use strict';
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (let key of Object.keys(apartment)) {
  values.push(apartment[key]);
}
  