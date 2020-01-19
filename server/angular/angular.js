let express = require("express");
let mysql = require("mysql");
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"testdb"
});
connection.connect();

module.exports = express.Router().get("/",(req,res)=>{
    connection.query(`select *from angular`,(err,records,fields)=>{
        if(err)
            throw err;
        else
            res.send(records);
    });
});