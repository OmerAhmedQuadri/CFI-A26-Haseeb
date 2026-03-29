import express from 'express'
import dotenv from 'dotenv'
import './dbConnect'

const server = express()

const PORT = process.env.PORT

server.use(express.json())
server.use('api/users', userRouter)
server.use('api/tasks', taskRouter)
server.use('api/auth', authRouter)

server.use((req, res) => {
    return res.send({
        success: false, 
        message: "Route not found"
    })
})

server.listen(PORT, () => {
    console.log('Server is running')
})
