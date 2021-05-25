'use strict';
function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (const key in object) {
  if (object.hasOwnProperty(key)){
    propCount += 1;
  }
}
  // Change code above this line
  return propCount;
}



// function countProps(object)
// {
// let propCount = 0;
// propCount = Object.keys(object).length;
//  return propCount;
// } 