'use strict';
function findMatches(...args) {
  const matches = []; 

    for (const number of args.slice(1)) {
       
        for (const arg of args[0]) {

            if (number === arg) {
                matches.push(arg);
            };
        }
    }

  
  return matches;
}