let express = require("express");
let mssql = require("mssql");

module.exports = express.Router().post("/", (req, res) => {
    mssql.connect({
        server: "localhost",
        user: "sa",
        password: "1234",
        database: "testdb"
    },(err)=>{
        if(err)
          throw err;
        else{
            let request=new mssql.Request();
            request.query(`insert into feedback values(${req.body.sno},'${req.body.query}')`,
            (err,result)=>{
                if(err)
                    throw err
                else
                    res.send({status:"feedback submitted"});
            });
        }
    });
});