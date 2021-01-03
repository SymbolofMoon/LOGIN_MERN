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
    activationController,
    loginController,
    forgotPasswordController
} = require('../controllers/auth.controller')

router.post('/register',
            validRegister,
    registerController)

router.post('/login',
    validLogin,
loginController)    
router.post('/activation',activationController)    
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
module.exports = router