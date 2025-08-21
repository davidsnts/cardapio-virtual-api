const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./src/database/database');
const cors = require('cors');

const usuario = require('./src/router/usuario.router');
const auth = require('./src/router/auth.router'); 
const pedido = require('./src/router/pedido.router');
const produto = require('./src/router/produto.router')


const PORT = 3001;

const app = express();

app.use(cors({
  origin: "*",          
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: false    // se precisar usar cookies/sessão, isso deve ser true e o origin não pode ser "*"
}));


app.use(express.json());

app.use("/usuario", usuario);
app.use("/login", auth);
app.use("/pedido", pedido);
app.use("/produto", produto);

app.get('/', (req, res) =>{
    res.send({"message": "Bem vindo a cardapio-virtual-api"});
});


app.listen(PORT, () => {
    console.log(`Api executando na porta http://localhost:${PORT} `);
});

connectToDatabase();

