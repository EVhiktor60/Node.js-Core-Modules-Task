/* 
NAME: Http Module
DESCRIPTION: This module provides a way to create HTTP servers and clients in Node.js. It is commonly used for building web applications.
*/

const http = require('http');
const options = {
  hostname: 'example.com',
  path: '/',
  method: 'GET'
};
const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});
req.end();
