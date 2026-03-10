import express from 'express'
import fs from 'fs/promises'

const PORT = 3000
const app = express()



async function serverLog(req, res) {
    const logData = `\n ${new Date().toLocaleString()} || ${req.method} ${req.url} ${req.socket.remoteAddress}`
    await fs.appendFile('./server.log', logData)

}

app.use(async (req, res, next) => {
    await serverLog(req)
    next()
})



app.get('/', (req, res) => {
    res.send({
        'allowed operations': {
            add: '/add/num1/num2',
            sub: '/sub/num1/num2',
            mul: '/mul/num1/num2',
            div: '/div/num1/num2',
            mod: '/mod/num1/num2'
        }
    })
})



app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    try {
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            res.send({
                status: false,
                message: 'Please enter a valid number',
                data: null,
            })
        }

        res.send({
            status: true,
            message: 'Operation Success',
            data: num1 + num2,
        })
    } catch (error) {
        res.send(error)
    }
})


app.get('/sub/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    try {
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            res.send({
                status: false,
                message: 'Please enter a valid number',
                data: null,
            })
        }

        res.send({
            status: true,
            message: 'Operation Success',
            data: num1 - num2,
        })
    } catch (error) {
        res.send(error)
    }
})


app.get('/mul/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    try {
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            res.send({
                status: false,
                message: 'Please enter a valid number',
                data: null,
            })
        }

        res.send({
            status: true,
            message: 'Operation Success',
            data: num1 * num2,
        })
    } catch (error) {
        res.send(error)
    }
})


app.get('/div/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    try {
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            res.send({
                status: false,
                message: 'Please enter a valid number',
                data: null,
            })
        }
        if (num2 == 0) {
            res.status(400).send({
                status: false,
                message: 'Division with zero is not possible'
            })
        }

        res.send({
            status: true,
            message: 'Operation Success',
            data: num1 / num2,
        })
    } catch (error) {
        res.send(error)
    }
})


app.get('/mod/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    try {
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            res.send({
                status: false,
                message: 'Please enter a valid number',
                data: null,
            })
        }

        res.send({
            status: true,
            message: 'Operation Success',
            data: num1 % num2,
        })
    } catch (error) {
        res.send(error)
    }
})


app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT);
})