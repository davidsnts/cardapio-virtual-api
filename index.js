const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./src/database/database');
const PORT = 3001;

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send({"message": "Bem vindo a cardapio-virtual-api"});
});

app.listen(PORT, () => {
    console.log(`Api executando na porta http://localhost:${PORT} `);
});

connectToDatabase();

