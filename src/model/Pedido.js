const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
    endereco: {
        rua: { type: String, required: true },
        numero: { type: Number, required: true },
        complemento: { type: String, required: false },
        CEP: { type: String, required: false },
    },
    itens:
        [
            {
                descricao: { type: String, required: true },
                quantidade: { type: Number, default: 1 },
                complementos:
                    [
                        { nome: { type: String, required: false } }
                    ]
            }
        ],
    valorTotal: { type: Number, required: true },
    status: { type: String, default: "Em andamento" },
    createdAt: { type: Date, required: true, default: Date.now }
});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;