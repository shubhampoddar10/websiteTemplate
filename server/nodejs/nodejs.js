let express = require("express");
let mongodb = require("mongodb");

let nareshit = mongodb.MongoClient;
module.exports = express.Router().get("/", (req, res) => {
    nareshit.connect("mongodb://localhost:27017/testdb",
        (err, db) => {
            if (err)
                throw err;
            else {
                db.collection("nodejs").find().toArray((err, array) => {
                    if (err)
                        throw err;
                    else
                        res.send(array);

                });
            }
        });
});
