/* 
NAME: Sys Module
DESCRIPTION: The sys module used to provide access to system-level functionality in Node.js, but has been deprecated and replaced with other modules such as os, process, and child_process.
*/

const os = require('os');
console.log(os.uptime());
