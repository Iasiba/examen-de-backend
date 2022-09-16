const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const postsServices = require('./posts.http')


router.route('/') //* /api/v1/publications/
    .get(postsServices.getAll)
    .post(postsServices.create)
router.route('/:id')
    .get(postsServices.getById)
    .delete(/*passport.authenticate('jwt', {session: false}), roleAdminMiddleware, */postsServices.remove)
    .put(/*passport.authenticate('jwt', {session: false}), roleAdminMiddleware ,*/postsServices.edit)


exports.router = router