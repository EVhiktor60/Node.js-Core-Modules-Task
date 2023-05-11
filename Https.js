/* 
NAME: Https Module
DESCRIPTION: This module provides a way to create HTTPS servers and clients in Node.js. It is similar to the http module, but provides encryption and other security features.
*/

const https = require('https');
const options = {
  hostname: 'example.com',
  path: '/',
  method: 'GET'
};
const req = https.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});
req.end();
