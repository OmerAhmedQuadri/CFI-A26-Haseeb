import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const generateJwtToken = async (payload) => {
    try {
        const jwtToken = jwt.sign({data: payload}, process.env.JWT_secret, {expiresIn: Number(process.env.JWT_EXPIRY)})
        return jwtToken
    } catch (error) {
        console.log(error)
    }
}