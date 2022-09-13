const monogdb = require("mongodb");

const MongoClient = monogdb.MongoClient;
const dbURL = "mongodb://localhost:27017";
const dbName = "users";

const myConnection = (cb)=>{
    MongoClient.connect(dbURL, (err, client) => {
        if (err) return console.log(err.message);
        const db = client.db(dbName);
        cb(db)
      });

}

module.exports=myConnection