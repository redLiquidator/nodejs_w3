var mysql = require ('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql ="CREATE TABLE customers_add_id (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Table created");
    });
});