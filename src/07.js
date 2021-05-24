'use strict';
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
 apartment.location = { country: "Jamaica",
                          city : "Kingston",
}

console.log(apartment.area);
console.log(apartment.rooms);
console.log(apartment.location.city);
console.log(apartment.location.country);

