const pedidoService = require('../service/pedido.service');

const findPedidoByIdController = async (id) => {
    try {
        return res.status(200).send(await pedidoService.findPedidoByIdService(id));
    } catch (error) {
        console.log(error);
        return res.status(500).send({"message":"Erro ao buscar pedido"})
    }
}

const findAllPedidosByUserController = async (req, res) => {
    try {
        return res.status(200).send(await pedidoService.findAllPedidosByUserService(req.params.id));
    } catch (error) {
        console.log(error);
        return res.status(500).send({"message":"Erro ao buscar pedido"})
    }
}

const createPedidoController = async (req, res) => {
    try {
        return res.status(201).send(await pedidoService.createPedidoService(req.body));
    } catch (error) {
        console.log(error);
         return res.status(500).send({"message":"Erro ao criar pedido"})
    }
}

module.exports = {
    findPedidoByIdController,
    findAllPedidosByUserController,
    createPedidoController
}