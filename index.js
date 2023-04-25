const express = require('express');

const app = express();

app.use(express.json());


app.use(express.urlencoded({extended:true}));

const makerController = require('./controller/makerController');


app.use('/', makerController);



app.listen(3000, ()=>{
    console.log("Servidor rodando no localhost 3000!")
});
