const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sortString(inputString) {
  return inputString.split('').sort().join('');
}

rl.question('Enter a string: ', (userInput) => {
  const sortedString = sortString(userInput);
  console.log(`Sorted string: ${sortedString}`);
  rl.close();
});
