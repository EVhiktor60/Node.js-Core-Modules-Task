/* 
NAME: Events Module
DESCRIPTION: This module provides a simple debugging console that is similar to the console found in web browsers. It is commonly used for logging messages and debugging Node.js applications.
*/

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('my-event', () => {
  console.log('my-event was triggered!');
});
myEmitter.emit('my-event');
