const { StatusCodes } = require('http-status-codes');
class AppErrors extends Error {
    constructor(
        name =' App error',  
        message = 'something went wrong',
        explanation = 'something went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
        super(message)
        this.message = message
        this.explanation = explanation
        this.name = name
        this.statusCode = statusCode
    }
}    

module.exports = AppErrors