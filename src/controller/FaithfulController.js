const Faithful = require('../model/Faithful');
const Mass = require('../model/Mass');

module.exports = {
    async list(req,res){
        const faithfuls  = await Faithful.findAll();
        return res.json(faithfuls);
    },
    async listAllMass(req,res){
        const {faithful_id} = req.params;

        const faithfuls = await Faithful.findAll({
            where:{ id:faithful_id},
            include:[{
                association:'masses',
            }]
        });

        return res.json(faithfuls);
    },
    async store(req,res){
        const {name, age, document,user_id} = req.body;

        try {
            const user = await Faithful.create({
                name,
                age,
                document,
                user_id,
            });
            return res.json(Faithful);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async setMass(req,res){
        const {mass_id} = req.params;
        const {faithful_id} = req.body;

        const faithful = await Faithful.findByPk(faithful_id);

        if(!faithful){
            res.status(400).json({ error: 'FaithFul not found' });
        }
        const mass = await Mass.findByPk(mass_id);
        await mass.addFaithful(faithful);

      
       return res.json(mass);

    },
    async removeMass(req,res){
        const {mass_id} = req.params;
        const {faithful_id} = req.body;

        const faithful = await Faithful.findByPk(faithful_id);

        if(!faithful){
            res.status(400).json({ error: 'FaithFul not found' });
        }
        const mass = await Mass.findByPk(mass_id);
        await mass.removeFaithful(faithful);

      
       return res.json(mass);
    }
}