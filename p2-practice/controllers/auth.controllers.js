import User from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import token from "../utils/token.js";
import { generateJwtToken } from "../utils/jwt.js";

export const register = async (req, res) => {
    try {
        const newUser = req.user

        newUser.password = await hashPassword(newUser.password)

        const emailToken = token()
        const phoneToken = token()

        newUser.tokens = {
            email: emailToken,
            phone: phoneToken
        }

        const user = await User.create(newUser)
    } catch (error) {

    }
}