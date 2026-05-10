import { validatePassword } from "../services/auth.services.js"
import { findUserByEmail } from "../services/user.services.js"

const registerValitador = async ({ fullname, email, password }) => {
    const errors = {}
    if (!fullname) {
        errors.fullname = 'Fullname is required'
    }
    if (!email) {
        errors.email = 'Email is required'
    }
    if (!password) {
        errors.password = 'Password is required'
    }
    return errors
}

export const registerMiddleware = async (req, res) => {
    try {
        const { fullname, email, password } = req.body || {}
        const errors = await registerValitador({ fullname, email, password })
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Incomplete or Invalid data',
                errors
            })
        }

        const existingUser = await findUserByEmail(email)

        if (existingUser && existingUser.status != 'pending') {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }

        if (existingUser && existingUser.status == 'pending') {
            await findUserByEmailAndDelete(email)
        }

        req.user = {
            fullname,
            email,
            password
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal Server error'
        })
    }
}