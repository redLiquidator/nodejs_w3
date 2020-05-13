/*fs.writeFile() method replaces the specified file and content if it exists.
    If the file does not contain the specified content, a new file will be created */

    var fs = require('fs');

    fs.writeFile('mynewfile3.txt','Hello content!', function(err){
        if (err) throw err;
        console.log('err');
    })