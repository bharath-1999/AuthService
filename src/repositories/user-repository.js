const { User } = require('../models/index');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
            
        } catch (error) {
            console.log("something went wrong in user respo");
            throw error;
        }
    }

    async destroy(userId) {
        try {
            const user = await User.destroy({
                where:{
                    id: userId
                }});
            return true;
            
        } catch (error) {
            console.log("something went wrong in user respo");
            throw error;
        }
    }

    async getById(id){
        try {
            const user = await User.findByPk(id,{
                atrributes: ['email','id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }

    }
}

module.exports = UserRepository;