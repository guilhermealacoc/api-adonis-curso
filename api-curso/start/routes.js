'use strict'

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

Route.get('/users', 'UserController.index')
Route.get('/users/:id', 'UserController.show')
Route.post('/users/:id', 'UserController.show')
Route.put('/users/:id', 'UserController.show')
Route.delete('/users/:id', 'UserController.show')

