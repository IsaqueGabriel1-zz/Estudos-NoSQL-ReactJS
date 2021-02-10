

function MongoClient(){
    const MongoClient = require('mongodb').MongoClient;
}
function url(){
    const url = "mongodb://localhost/MyBank";
}

module.exports = {MongoClient, url}