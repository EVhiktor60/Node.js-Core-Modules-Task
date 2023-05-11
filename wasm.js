/* 
NAME: Wasm Module
DESCRIPTION: The wasm module allows you to load WebAssembly modules in Node.js. WebAssembly is a binary format that can be used to run code at near-native speeds in the browser and on the server.
*/


const fs = require('fs');
const wasmCode = fs.readFileSync('module.wasm');
const imports = {
  env: {
    log: console.log,
  },
};
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
