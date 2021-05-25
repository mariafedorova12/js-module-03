'use strict';
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
for (let salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}
