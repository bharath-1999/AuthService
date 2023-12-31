const UserService = require('../services/user-service')
console.log(UserService);
const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            success: true,
            message: 'succesfully entered a new user',
            data: response,
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message: error.message,
            data:{},
            success: false,
            error: error.explanation 
        })
    }
}

const signin = async (req,res) => {
    try {
         const response = await userService.signin(req.body.email,req.body.password);
         return res.status(201).json({
            success: true,
            message: 'succesfully signed in',
            data: response,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data:{},
            success: false,
            error: error
        })
    }
}

const isAuthenticated =async (req,res) => {
    try {
        const token = req.header('x-access-token');
        const response = await userService.isAuthenticated(token);
        return res.status(201).json({
            success: true,
            message: 'succesfully user is authenticated and user is valid',
            data: response,
            error: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data:{},
            success: false,
            error: error
        })
    }
}
const isAdmin = async(req,res) =>{
    try {
        const response = await userService.isAdmin(req.body.userId);
        return res.status(201).json({
            success: true,
            message: 'succesfully fetched weather user is admin or not ',
            data: response,
            error: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data:{},
            success: false,
            error: error
        })
        
    }

}
module.exports = {
    create,
    signin,
    isAuthenticated,
    isAdmin
}