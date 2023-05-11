/* 
NAME: Util Module
DESCRIPTION: This module provides various utility functions that are commonly used in Node.js applications. It is commonly used for working with objects, formatting strings, and handling errors.
*/

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

readFile('file.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
