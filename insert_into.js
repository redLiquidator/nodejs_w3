var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mydb"
});

con.connect(function(err){
    console.log("Connected");
    var sql = "INSERT INTO customers (name,address) VALUES ('Company Inc','Highway 37')";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("data inserted");
    });
});
    