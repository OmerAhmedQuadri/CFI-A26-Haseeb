import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db = process.env.MONGO_URL

const dbConnect = async () => {
    try {
        await mongoose.connect(db)
        console.log('DB connected successfuly✅');
    } catch (error) {
        console.log('Error Connecting to the Database❌');
        console.log(error);
    }
}

dbConnect()

export default dbConnect