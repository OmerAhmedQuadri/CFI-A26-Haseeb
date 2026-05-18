import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
import dbConnect from './db.COnnect.js'


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
// app.use(cookieParser())
app.use(express.json())


app.use((req, res, next) => {
    console.log((new Date()).toLocaleTimeString(), req.method, req.url);
    next()
})

app.use('/api/auth', authRouter)


app.listen(PORT, () => {
    console.log('Server is Running');
})