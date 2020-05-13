/* require : include the File System module */

var http = require('http');
var fs = require('fs');

/* read HTML file and return the content */
http.createServer(function (req,res) {
    fs.readFile('demofile1.html',function(err,data){
        res.writeHead(200,{'Content-Type': 'text-html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);