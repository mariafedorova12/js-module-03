'use strict';
// Change code below this line
function addOverNum(...args) {
  let total = 0;
  let number = 0;

  for (const arg of args) {
    number = args[0];
    if (arg > number) {
     total += arg;
    }
  }

  return total;
  // Change code above this line
}
