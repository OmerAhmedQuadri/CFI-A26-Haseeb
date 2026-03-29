import express from 'express'

import './dbConnect.js'
import movieRouter from './routes/movie.routes.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/api/movies', movieRouter)


app.listen(PORT, () => {
    console.log('Server is running at http://localhost:'+PORT);
    
})