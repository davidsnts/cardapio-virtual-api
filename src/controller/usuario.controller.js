const userService = require('../service/usuario.service');

const findUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ "message": "Campo ID é obrigatório!" })
        }

        const user = await userService.findUserByIdService(req.params.id);

        if (!user)
            return res.status(404).send({ message: "Usuário não encontrado" });

        return res.status(200).send(user);
    } catch (error) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao buscar usuário, tente novamente!` });
    }
}

const CreateUserController = async (req, res) => {
    try {
        const body = req.body;

        const user = await userService.CreateUserService(body);

        if (user) {
            return res.status(201).send({ "msg": `Usuário criado com sucesso!` });
        }

        return res.status(201).send(user);

    } catch (error) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send({ "msg": `Erro inesperado ao criar usuário, tente novamente!` });
    }
}


module.exports = {
    findUserByIdController,
    CreateUserController
}


