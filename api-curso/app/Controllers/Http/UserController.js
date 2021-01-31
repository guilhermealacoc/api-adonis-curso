'use strict'

class UserController {
    async index(){
        return { result: 'Buscou todos os usuarios' }
    }

    async show () {
        return { result: 'buscou o usuário 1'}
    }
}

module.exports = UserController
