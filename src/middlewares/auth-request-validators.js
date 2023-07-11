const validateUserSignup = (req,res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            err: 'email or password missing in the signup request'
        })
    }
    next();
}

const validateIsAdminRequest = (req, res,next) => {
    if(!req.body.userId) {
        return res.status(400).json({
            success: false,
            data: {},
            err: 'user is is not given',
            message: 'something went wrong'
        })
    }
    console.log("here")
    next();
}
module.exports = {
    validateUserSignup,
    validateIsAdminRequest
}