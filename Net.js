/* 
NAME: Net Module
DESCRIPTION: This module provides a way to create TCP servers and clients in Node.js. It is commonly used for building network applications.
*/

const net = require('net');
const client = net.createConnection({ port: 3000 }, () => {
  console.log('connected to server');
});
client.on('data', (data) => {
  console.log(data.toString());
});
client.end();
