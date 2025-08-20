const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: {
        rua: { type: String, required: true },
        numero: { type: Number, required: true },
        complemento: { type: String, required: false },
        CEP: { type: String, required: false },
    },
    createdAt: { type: Date, required: true, default: Date.now }
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;