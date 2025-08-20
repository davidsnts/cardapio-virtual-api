const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = async (telefone) => Usuario.findOne({ telefone: telefone });
const generateToken = async (userId) => jwt.sign({ id: userId }, process.env.SECRET);

module.exports = { loginService, generateToken }
