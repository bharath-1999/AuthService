const express = require('express')

const UserController = require('../../controllers/user-controller')
const {AuthRequestvalidators} = require('../../middlewares/index');
const router = express.Router();

router.post(
    '/signup',
    AuthRequestvalidators.validateUserSignup,
    UserController.create)
router.post(
    '/signin',
    AuthRequestvalidators.validateUserSignup,
    UserController.signin)

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
    )
router.get('/dummy',(req,res) => {
    return res.status(200).json({message: 'OK'});
})

router.get(
    '/isAdmin',
    AuthRequestvalidators.validateIsAdminRequest,
    UserController.isAdmin
)
module.exports = router