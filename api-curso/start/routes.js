'use strict'

const SessionController = require('../app/Controllers/Http/SessionController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: 'online' }
})

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']], [['users.update'], ['User']]
])).middleware(['auth:jwt', 'is:Manager'])

Route.resource('clients', 'ClientController').apiOnly().middleware(['auth:jwt', 'is:Manager'])
Route.resource('exercises', 'ExerciseController').apiOnly().middleware(['auth:jwt', 'can:gerenc_exercises', 'audit'])
Route.resource('trainings', 'TrainingController').apiOnly().middleware(['auth:jwt', 'can:gerenc_exercises'])
Route.resource('permissions', 'PermissionController').apiOnly().middleware(['auth:jwt', 'is:Manager'])
Route.resource('roles', 'RoleController').apiOnly().middleware(['auth:jwt', 'is:Manager'])




