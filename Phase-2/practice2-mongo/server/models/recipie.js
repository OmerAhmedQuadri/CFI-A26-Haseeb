import mongoose from 'mongoose'

const recipieSchema = new mongoose.Schema({
    recipieName: {
        type: String,
        require: true,
        unique: true
    },
    ingredients: {
        type: Object,
        require: true,
    },
    cookingTime: {
        type: Number,
    },
    difficulty: {
        type: String,
        enum: ['high', 'medium', 'low']
    },

    createdAt: {
        type: String,
        require: true,
        default: new Date().toLocaleString()
    },
    isHalal: {
        type: Boolean,
        require: true,
        default: true
    }

})

const Recipie = mongoose.model('Recipie', recipieSchema)

export default recipieSchema