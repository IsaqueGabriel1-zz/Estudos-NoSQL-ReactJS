var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/MyBank";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors())


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Select
app.get('/usuario', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("feletro");
        dbo.collection("produtos").find({}).toArray ((err, result)=>{
            if(err) throw err;
            res.send(result);
        })
    })
})


//Insert
app.post('/usuario', (req, res)=>{
    const {cliente, endereco, telefone, produto, valor} = req.body;

    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("feletro");
        var obj = {cliente: cliente, endereco: endereco, telefone: telefone, produto: produto, valor: valor};
        dbo.collection("pedidos").insertOne(obj, (err, res)=>{
            if(err) throw err;
            console.log(res)
        })
    })
    res.send(req.body)
})

app.listen(7000, ()=>{console.log("Rodando")})
