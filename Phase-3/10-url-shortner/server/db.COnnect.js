import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

async function dbConnect () {
    try {
        const db = process.env.MONGO_URL
        await mongoose.connect(db)
        console.log('Db Connected successfully✅');
    } catch (error) {
        console.log('Db failed to connect❌');
        console.log(error);
    }
    
}

dbConnect()

export default dbConnect