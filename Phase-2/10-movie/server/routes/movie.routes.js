import express from 'express'
import { getAllMovies, newMovie, rateMovie } from '../controllers/movie.controller.js'


const movieRouter = express.Router()

movieRouter.get('/', getAllMovies)
movieRouter.post('/newmovie', newMovie)
movieRouter.put('/rate/:id', rateMovie)

movieRouter.use((req, res) => {
    res.status(400).send({
        success: false,
        message: 'Route not found'
    })
})

export default movieRouter







/*
GET = 
display existing movies:
/api/movies/

POST = 
list a new movie:
/api/movies/newmovie

PUT = 
rate a movie
/api/movies/rate

*/