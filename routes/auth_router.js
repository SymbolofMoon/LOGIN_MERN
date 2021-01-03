const express = require('express')
const router = express.Router()


const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')


const {
    registerController,
    activationController
} = require('../controllers/auth.controller')

router.post('/register',
            validRegister,
    registerController)
router.post('/activation',activationController)    

module.exports = router