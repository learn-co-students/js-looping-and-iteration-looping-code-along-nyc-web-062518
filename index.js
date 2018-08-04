function printBadges(nameArray) {
  for(let i = 0; i < nameArray.length; i++) {
    console.log(`Welcome ${nameArray[i]}! You are employee #${i+1}.`);
  }
  return nameArray
}

function tailsNeverFails() {
  let tailsNum = 0;
  while(Math.random() >= 0.5) {
    tailsNum++;
  }
  return `You got ${tailsNum} tails in a row!`;
}
