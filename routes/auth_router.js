const express = require('express')
const router = express.Router()


const {
    registerController,
    // activationController
} = require('../controllers/auth.controller')

router.post('/register',
            // validSign,
    registerController)

// router.post('/activation',activationController)    

module.exports = router