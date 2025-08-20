const express = require("express");
const router = express.Router();
const usuarioController = require('../controller/usuario.controller');

router.get('/findById/:id', usuarioController.findUserByIdController);
router.post('/create', usuarioController.CreateUserController);

module.exports = router;