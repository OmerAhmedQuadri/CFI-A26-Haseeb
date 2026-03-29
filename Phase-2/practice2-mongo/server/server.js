import express from 'express'



const PORT = 3000

const app = express.json()

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'Server is running'
    })
})

app.use('/api/recipies/', recipieRouter)

app.use( (req, res) => {
    res.status(400).send({
        success: false,
        message: 'Route not found'
    })
})

app.listen(PORT, () => {
    console.log('Server is running')
})