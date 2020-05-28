var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connect");
    con.query("CREATE DATABASE mydb",function(err,result){
        if(err) throw err;
        console.log("Database created");
    
    })
})

