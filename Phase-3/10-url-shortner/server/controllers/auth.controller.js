import { verifyRegisterOtp } from "../services/auth.services.js"
import { createUser } from "../services/user.services.js"



export const register = async (req, res) => {
    const {fullname, email, password} = req.user
    try {
        const user = await createUser({ fullname, email, password })
        
        return res.status(201).json({
            success: true,
            message: 'User registered successfully'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
        
    }
}

export const validateUserRegistration = async (req, res) => {
    const {email, otp} = req.body || {}
    if(!email){
        return res.status(400).send({
            success: false,
            message: 'Email is required'
        })
    }
    if(!otp){
        return res.status(400).send({
            success: false, 
            message: 'Otp is required'
        })
    }

    try {
        const {success, message} = await verifyRegisterOtp(email, otp)
        if(success){
            return res.status(200).send({
                success:true,
                message
            })
        }else{
            return res.status(400).send({
                success: false,
                message
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Internal server error'
        })
        
    }
}