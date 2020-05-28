var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
 var adr ="Lowstreet 4";
   var sql = 'SELECT * FROM customers WHERE address = ? ';
   con.query(sql,[adr],function(err,result){
       if (err) throw err;
       console.log(result);
   })
});