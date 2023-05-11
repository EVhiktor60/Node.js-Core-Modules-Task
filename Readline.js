/* 
NAME: Readline Module
DESCRIPTION: The readline module provides an interface for reading input from a readable stream (like process.stdin) one line at a time. It allows for interactive command-line interfaces to be built in Node.js.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
