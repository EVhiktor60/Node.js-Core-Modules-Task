/* 
NAME: Buffer Module
DESCRIPTION: This module provides a way to work with binary data directly in Node.js. It is commonly used for working with network protocols and file systems.
*/

const buffer = Buffer.from('hello');
console.log(buffer.toString('utf8'));
