'use strict'

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
