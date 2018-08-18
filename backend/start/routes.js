'use strict'

const Route = use('Route')

Route.resource('posts', 'PostController').apiOnly()
