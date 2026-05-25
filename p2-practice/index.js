import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'Server is running'
    })
})

app.listen(3000, () => {
    console.log('Server is running')
})