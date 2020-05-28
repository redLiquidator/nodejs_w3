var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    var sql ="INSERT INTO customers (name,address) VALUES ?";
    var values = [
        ['John','Highway 71'],
        ['Peter','Lowstreet 4']
    ];
    con.query(sql,[values],function(err,result){
        if (err) throw err;
        console.log("recoreds inserted"+result.affectedRows);
    });
});