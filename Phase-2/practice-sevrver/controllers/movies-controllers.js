import { readDB, writeDB } from "../models/movies-models.js";



const getAllMovies = async (req,res) => {
    const data = await readDB()
    res.json(data)
}

const getMovieById = async (req, res) => {
    const id = req.params.id

    const data = await readDB()
    const movie = data.find(m => m.id == id)
    if(!movie) return res.send('Movie not found')

    res.json(movie)
}

const addMovie = async (req, res) => {
    const movie = req.body
    const data = await readDB()
    data.push(movie)

    await writeDB(data)
    res.send('Movie added successfully')

}

const updateWatched = async( req, res) => {
    const id = req.params.id
    const movies = await readDB()

    const movieIndex = movies.findIndex(m => m.id == id)
    if(movieIndex == -1) return res.send('invalid id')
    
    movies[movieIndex].watched = !movies[movieIndex].watched
    
    await writeDB(movies)
    res.json(movies[movieIndex])    
}

const deleteMovie = async(req, res) => {
    const id = req.params.id
    const movies = await readDB()

    const movieIndex = movies.findIndex(m => m.id == id)
    movies.splice(movieIndex, 1)
    await writeDB(movies)
    res.send('Movie deleted successfully')
}




export {getAllMovies, getMovieById, addMovie, updateWatched, deleteMovie}
