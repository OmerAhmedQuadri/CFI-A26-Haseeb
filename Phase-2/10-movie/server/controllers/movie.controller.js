import MOVIE from "../models/movie.models.js";


const getAllMovies = async (req, res) => {
    try {
        const movies = await MOVIE.find()
        if (!movies) {
            return res.send({
                success: false,
                message: 'Movies not found'
            })
        }

        res.send({
            success: true,
            message: 'Movies fetched successfully',
            data: movies
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: 'Internal server error',
            data: error
        })
    }
}

const newMovie = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({
                success: false,
                message: "Body is missing",
                data: []
            })
        }
        const { title, description } = req.body

        const existingMovie = await MOVIE.findOne({ title: title })
        if (existingMovie) {
            return res.status(400).send({
                success: false,
                message: 'This movie already exists'
            })
        }

        if (!title || !description) {
            return res.status(400).send({
                success: false,
                message: 'Incomplete or invalid data'
            })
        }

        const newMovie = MOVIE({ title, description })
        await newMovie.save()

        res.status(200).send({
            success: true,
            message: 'Movie listed successfully',
            data: newMovie
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const rateMovie = async (req, res) => {
    try {
        const id = req.params.id

        if (!id) {
           return res.status(400).send({
                success: false,
                message: 'Invalid id'
            })
        }
        const existingMovie = await MOVIE.findById(id)

        if(!existingMovie){
            return res.status(400).send({
                success: false,
                message: 'Movie not found'
            })
        }

        const rating = Number(req.body.rating)
        
        if (isNaN(rating) || rating > 5 || rating < 0) {
            return res.status(400).send({
                success: false,
                message: 'Invalid Rating'
            })
        }

        const movie = await MOVIE.findById(id)

        movie.rating.push(rating)
        movie.average_rating = movie.rating.reduce((acc, curr) => curr + acc, 0) / movie.rating.length
        await movie.save()

        res.send({
            success: true,
            message: 'Movie rated successfully',
        })


    } catch (error) {
        console.error('Error',error);
        
        res.status(400).send({
            success: false,
            message: 'Internal server error'
        })
    }
}






export { getAllMovies, newMovie, rateMovie }