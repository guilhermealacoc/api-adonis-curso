'use strict'

class User {
  get rules () {
    return {
      name: 'required',
      username: 'required',
      email: 'required',
      password: 'required',
      type_user_id: 'required'
    }
  }

  get messages(){
    return {
      'name.required': 'informe o name',
      'username.required': 'informe o username',
      'email.required': 'informe o email',
      'password.required': 'informe o password',
      'type_user_id.required': 'informe o type_user_id'
    }
  }
}

module.exports = User
