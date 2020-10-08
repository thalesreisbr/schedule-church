const Priest = require('../model/Priest');
const User = require('../model/User');

module.exports = {

    async list(req,res){
        const priest = await Priest.findAll();
        return res.json(priest);
    },

    async store(req,res){
        const {name, user_id, age, position} = req.body;

        const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    try {
        const priest = await Priest.create({
            name,
            age,
            position,
            user_id,
        });
        return res.json(priest);
    } catch (error) {
        return res.status(400).json(error);
    }
    }
}