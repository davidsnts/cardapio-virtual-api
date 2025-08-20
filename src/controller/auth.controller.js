const authService = require("../service/auth.service");

const loginController = async (req, res) => {
    const { telefone } = req.body;
    if (!telefone) {
        return res.status(400).json({ message: "O telefone é obrigatório!" });
    }
    const user = await authService.loginService(telefone);
    
    if (!user) {
        return res.status(401).json({ message: "Usuário não cadastrado!" });
    }

    const token = await authService.generateToken(user._id);
    const {_id, nome } = user;
    
    return res.status(200).send({
        nome, token, _id
    });    
}
module.exports = { loginController };