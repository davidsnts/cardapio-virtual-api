const Produto = require('../model/Produto');

const findProdutoByIdService = (id) => {
    return Produto.findById(id);
}

const findAll = () => {
    return Produto.find();
}

const createProdutoService = (body) => {
    return Produto.create(body);
}

const updateProdutoService = (id, body) => {
    return Produto.findByIdAndUpdate({ _id: id }, body);
}

const removeProdutoService = (id) =>{
    return Produto.findByIdAndDelete(id);
}

module.exports = {
    findProdutoByIdService,
    createProdutoService,
    updateProdutoService,
    findAll,
    removeProdutoService
}