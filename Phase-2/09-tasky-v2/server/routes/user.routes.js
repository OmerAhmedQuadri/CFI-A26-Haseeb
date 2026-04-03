import express from 'express'



const router = express.Router()

router.get('/', (req, res) =>{
    res.send({
        success: true,
        message: 'User router is working just fine'
    })
})

router.post('/register', registerMiddleware, registerUser)
router('/login', loginMiddleware, loginUser)

router.use((req, res) =>{
    return res.send({
        success: false,
        message: 'Route not found'
    })
})

export default router

