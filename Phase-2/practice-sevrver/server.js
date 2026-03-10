import express from 'express'
import { getAllMovies, getMovieById, addMovie, updateWatched, deleteMovie } from './controllers/movies-controllers.js'

const app = express()
const PORT = 3000

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Server is running')
// })

app.get('/api/movies', getAllMovies)

app.get('/api/movies/:id', getMovieById)

app.post('/api/add', addMovie)

app.put('/api/update/:id', updateWatched)

app.delete('/api/delete/:id', deleteMovie)



app.listen(PORT, () => {
    console.log('Server is running at http://localhost:' + PORT)
})



/*
GET: 
    get all movies - /api/movies
    get movie by id - /api/movie/:id

POST:
    add a movie - /api/add

PUT:
    update the watched key to true or false - /api/update

DELETE:
    delete a movie - /api/delete
*/