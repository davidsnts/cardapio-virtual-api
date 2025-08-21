const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produto.controller');

router.get('/findById', produtoController.findProdutoByIdController);
router.get('/findAll', produtoController.findAllProdutosController);
router.post('/create', produtoController.CreateProdutoController);
router.post('/update', produtoController.UpdateProdutoController);
router.delete('/delete', produtoController.RemoveProdutoController);

module.exports = router;


