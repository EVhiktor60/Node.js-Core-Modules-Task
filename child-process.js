/* 
NAME: Child_Process Module
DESCRIPTION: This module provides a way to spawn child processes in Node.js. It is commonly used for running shell commands, and interacting with other executables on the system.
*/

const { fork } = require('child_process');
const child = fork('worker.js');
child.on('message', (message) => {
  console.log('received message:', message);
});
child.send('hello from parent');



