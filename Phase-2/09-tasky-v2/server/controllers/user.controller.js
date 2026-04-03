import User from '../models/User.js'
import token from '../utils/token.js';
import { sendEmail } from '../services/email-service.js';
import { comparePassword, hashPassword } from '../utils/bcrypt.js';
import { generateJWTToken } from '../utils/jwt.js';

export const registerUser = async (req, res) => {
    try {
        const newUser = req.User

        //hash user password
        newUser.password = await hashPassword(newUser.password)

        //generate verification tokens for email and phone
        const emailToken = token()
        const phoneToken = token()

        newUser.tokens = {
            email: emailToken,
            phone: phoneToken
        }

        //save user
        const user = await User.create(newUser)

        //send verification / magic link
        const emailData = {
            to: user.email,
            subject: 'Tasky Verification',
            hhtml: `<h3>Hello ${user.fullname}<h3>
            <p>Click <a href="http://localhost:3000/api/auth/verify/email/${user._id}/${user.tokens.email}" target = "_blank"> here </a> to verify your email.</p>`
        }
        await sendEmail(emailData)

        res.send({
            success: true,
            message: 'user created successfully',
            data: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = req.user

        const payload = {
            id: user._id,
            email: user.email,
            role: 'user'
        }
        const token = await generateJWTToken(payload)

        res.send({
            success: true,
            message: 'user login successfull',
            data: { user, token: token }
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}