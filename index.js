const express = require('express');

const App = express();

app.use(express.json());






App.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000!")
})
