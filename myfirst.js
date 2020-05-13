/* How to execute this node.js file
    beforehand: install node.js
    1st: \webapps\ROOT\nodejs>node myfirst.js
    2nd: you can see the phrase Hello World at http://localhost:8080 */
/* include HTTP module. http module is a built in module. 
    This HTTP module allows you to transfer data over the HTTP.
    the HTTP module can create an HTTP server that listens to server ports
    and gives a response back to the client.*/    
var http = require('http');

/* create a server object */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!'); // write a response to the client 
}).listen(8080);  // the server object listens on port 8080 

/* the function passed into the http.createServer() method, will be executed
    when someone tries to access the computer on port 8080. */  