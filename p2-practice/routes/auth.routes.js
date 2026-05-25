import express, { application } from 'express'

const authRouter = express.Router()

authRouter.post('/register', registerMiddleware, register)
authRouter.post('/login', loginMiddleware, login)


authRouter.use((req, res) => {
    res.send({
        success: false,
        message: 'Route not found'
    })
})

export default authRouter