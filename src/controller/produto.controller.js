const produtoService = require('../service/produto.service');

const findProdutoByIdController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.findProdutoByIdService(req.params.id));
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": "Erro ao buscar produto" })
    }
}

const findAllProdutosController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.findAll());
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": "Erro ao buscar produtos" })
    }
}

const CreateProdutoController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.createProdutoService(req.body));
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": "Erro ao criar produto" })
    }
}

const UpdateProdutoController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.updateProdutoService(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": "Erro ao criar produto" })
    }
}


const RemoveProdutoController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.removeProdutoService(req.params.id));
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": "Erro ao remover produto" })
    }
}
module.exports = {
    findProdutoByIdController,
    findAllProdutosController,
    CreateProdutoController,
    UpdateProdutoController,
    RemoveProdutoController
}