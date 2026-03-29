import User from '../models/User.js'
import { comparePassword, hashPassword } from '../utils/bcrypt.js';

export const registerUser = async (req, res) => {
    try {
        const user = await User.create(newUser)
        
    } catch (error) {
        console.log(error);
        
    }
}