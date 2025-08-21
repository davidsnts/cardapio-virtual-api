const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true },
    complementos: [{ "nome": { type: String } }],
    createdAt: { type: Date, required: true, default: Date.now }
});

const Usuario = mongoose.model("produtos", ProdutoSchema);

module.exports = Usuario;