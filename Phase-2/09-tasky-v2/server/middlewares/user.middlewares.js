const validateUserRegistrationData = (userData) => {
    const errors = []
    if(!userData.email){
        errors.push({
            field: 'email',
            message:'Valid email address is required'
        })
    }
    if(!userData.phone) {
        errors.push({
            field: 'phone',
            message: 'Valid phone number is required'
        })
    }
    if(!userData.password) {
        errors.push({
            field: 'phone',
            message: 'Valid password is required'
        })
    if(!userData.fullname) {
        errors.push({
            field: 'phone',
            message: 'Valid fullname is required'
        })
    }
}
    }
}