// Code your solutions in this file

writeCards["Ada", "Brendan", "Ali"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
      console.log(`Thank you, ${names[i]} for the wonderful birthday gift`);
    }
  
    return names;
  }
writeCards(names);