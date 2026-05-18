import express, { Router } from 'express'
import { registerMiddleware } from '../middlewares/auth.middlewares.js'
import { register, validateUserRegistration } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/register', registerMiddleware, register)
authRouter.post('/register/verify-otp', validateUserRegistration)
// authRouter.post('/register/resend-otp', resendRegisterOtp)

// authRouter.post('/login', loginMiddleware, login)



authRouter.use((req, res) => {
    res.send({
        success: false,
        message: 'Route not found'
    })
})


export default authRouter

