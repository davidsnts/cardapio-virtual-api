const Pedido = require('../model/Pedido');

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidosByUserService = (id) => {
    return Pedido.find({ userId: id });
}

const createPedidoService = (body) => {
    return Pedido.create(body);
}

const updateStatusPedidoService = (id, status) => {
    return Pedido.findByIdAndUpdate({ _id: id }, { status: status });
}

module.exports = {
    findPedidoByIdService,    
    createPedidoService,
    updateStatusPedidoService,    
    findAllPedidosByUserService
}