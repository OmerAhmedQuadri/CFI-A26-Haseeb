import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description : {
        type: String,
        required: true,
    },
    rating : {
        type: [Number],
        required: true,
        default: []
    },
    average_rating: {
        type: Number,
        default: 0
    }
}) 

const MOVIE = mongoose.model('MOVIE', movieSchema)

export default MOVIE