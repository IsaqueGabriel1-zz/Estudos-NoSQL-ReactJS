const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('tudo certo'); 
})

app.listen(4000, ()=>{console.log("Blz")})