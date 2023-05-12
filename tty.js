/* 
NAME: Tty Module
DESCRIPTION: This module provides a way to interact with terminal devices in Node.js, such as reading from and writing to the terminal. Here's an example of detecting whether a Node.js script is running in a terminal:
*/



if (process.stdout.isTTY) {
    console.log('This script is running in a terminal');
  } else {
    console.log('This script is not running in a terminal');
  }
  


