const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function reverseNumber(num) {
  let numStr = num.toString();
  let reversedStr = numStr.split('').reverse().join('');
  let reversedNum = parseInt(reversedStr);
  return reversedNum;
}
rl.question('Enter a number: ', (input) => {
  const num = parseFloat(input);
  if (!isNaN(num)) {
    const reversed = reverseNumber(num);
    console.log(`Reversed number: ${reversed}`);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
  rl.close();
});
