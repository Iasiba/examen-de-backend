const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const postsServices = require('./comments.http')


router.route('/comments') //* /api/v1/publications/:id/comments
    .get(postsServices.getAll)
    .post(postsServices.create)
router.route('/:id/comments')
    .get(postsServices.getAllByPostId)


exports.router = router