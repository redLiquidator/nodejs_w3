/* Objects in Node.js can fire events
   readStream object fires events when opening and closing a file */

    var fs = require ('fs');
    var rs = fs.createReadStream('./demofile.txt');
    rs.on('open',function(){
        console.log('The file is open');
    })
