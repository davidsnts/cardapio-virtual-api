const Usuario = require('../model/Usuario');

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const CreateUserService = async (body) => {   
     try {        
        const novoUsuario = await Usuario.create(body);
        return novoUsuario;
    } catch (error) {      
        console.log(error)        
    }
}

const RemoveUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
}

module.exports ={
    findUserByIdService,
    CreateUserService,
    RemoveUserService
}