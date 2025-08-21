const express = require("express");
const router = express.Router();
const pedidoController = require('../controller/pedido.controller');

router.get('/findById/:id', pedidoController.findPedidoByIdController);
router.get('/findAllByIdUser/:id', pedidoController.findAllPedidosByUserController);
router.post('/create', pedidoController.createPedidoController);

module.exports = router