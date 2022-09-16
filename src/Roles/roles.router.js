const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/adminRole')
require('../middleware/auth.middleware')(passport)

const rolesServices = require('./roles.http')


router.route('/') //* /api/v1/users/
    .get(rolesServices.getAll)
    .post(rolesServices.create)
router.route('/:id')
    .get(rolesServices.getById)
    .delete(/*passport.authenticate('jwt', {session: false}), roleAdminMiddleware, */rolesServices.remove)
    .put(/*passport.authenticate('jwt', {session: false}), roleAdminMiddleware ,*/rolesServices.edit)


exports.router = router