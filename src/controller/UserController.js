const User = require('../model/User');

module.exports = {
    async store(req,res){
        const {name,password} = req.body;
        
        try {
            const user = await User.create({
                name,
                password,
            });
            return res.json(user);
        } catch (error) {
            return res.json(error);
        }
    },
    async list(req,res){
        try{
            const users = await User.findAll();
            return res.json(users);
        }catch (error) {
            return res.json(error);
        }
    }
}