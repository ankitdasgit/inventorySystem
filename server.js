const { appendFile } = require('fs');
const http = require('http');
const app= require('./app');
const port= 4000;

       

const server = http.createServer(app);
console.log("server is created successfully");


 server.listen(port);

