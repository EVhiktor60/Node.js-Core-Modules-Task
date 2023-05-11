/* 
NAME: Process Module
DESCRIPTION: This module provides information about the Node.js process running the current script. It is commonly used for managing environment variables and exiting the process.
*/

process.on('SIGINT', () => {
    console.log('Received SIGINT. Exiting.');
    process.exit();
  });
  

