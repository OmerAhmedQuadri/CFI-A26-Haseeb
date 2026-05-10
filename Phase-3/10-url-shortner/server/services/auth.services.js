import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.utils.js";

export const validatePassword = async (userId, password) => {
    const user = await User.findById(userId)
    const isValid = await comparePassword(password, user.password)
    return isValid
}

export const verifyRegisterOtp = async (email, otp) => {
    const user = await User.findOne({ email })

    if (user && user.status == 'pending') {
        if (user.authTokens.userRegisteration.otp == otp) {
            const expiry = new Date(user.authTokens.userRegisteration.expires)
            if (expiry.getTime() < Date.now()) {
                return {
                    success: false,
                    message: 'Otp has expired'
                }
            }
        user.status = 'active'
        user.authTokens.userRegisteration.otp = null
        user.authTokens.userRegisteration.expires = null
        await user.save()
        return {
            success: true,
            message: 'user is now verified, you can login now'
        }
    }
    else{
        return {
            success: false,
            message: 'Invalid Otp'
        }
    }
}
    else if (user) {
        return {
            success: true,
            message: 'User already verified'
        }
    }
    else {
        return {
            success: false,
            message: 'User does not exist'
        }
    }
}
