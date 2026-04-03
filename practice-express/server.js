import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const port = process.env.PORT

const run = (req, res) =>{
    res.send('runn')
}

app.get('/api/get', run)

const controller = async (req, res) =>{
    try {
        const data = await DB.find()
        
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}
app.use('/uder',run)









app.listen(port, () => {
    console.log('server is running');

})

