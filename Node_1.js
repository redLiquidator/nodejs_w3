var http = require('http');
/* locate the module. this line imports myfirstmodeule.js file, 
    so that we could you the method myDateTime().  */
var dt = require('./myfirstmodule'); 

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

/*http://localhost:8080*/