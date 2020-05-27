/* NPM is a package manager for Node.js packages.
   modules are JavaScript libraries you can include in your project 
   open the command line interface and tell NPM to download the package you want */

   var http = require('http');
   // create a file that will convert the output "Hello World" into upper-case letters.
   var uc = require('upper-case');
   http.createServer(function(req,res){
       res.writeHead(200,{'Content-Type':'text/html'});
       res.write(uc.upperCase("Hello World!"));
       res.end();
   }).listen(8080);