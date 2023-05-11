/* 
NAME: Fs Module
DESCRIPTION: This module provides a way to work with the file system in Node.js. It is commonly used for reading and writing files, as well as managing directories.
*/

const fs = require('fs');
fs.writeFile('file.txt', 'hello world', function(err) {
  if (err) throw err;
  console.log('file written');
});
