const Church = require('../model/Church');
const Priest = require('../model/Priest');
module.exports = {
    async list(req,res){
        const churchs = await Church.findAll();

        return res.json(churchs);
    },    
    async store(req,res){
        const {name, capacity, address_id} = req.body;

        try {
            const church = await Church.create({
                name,
                capacity,
                address_id,
            });

            return res.json(church);
        } catch (error) {
            return res.status(400).json({"error":error,"errrou":"erfsafa"});
        }
    },
    async updatePriest(req,res){
        const {church_id,priest_id} = req.body;
        console.log(church_id);

        const priest = await Priest.findByPk(priest_id);

        const church = await Church.findByPk(church_id);

        try {
            await priest.addChurch(church);    
        } catch (error) {
            return res.status(400).json(error);
        }
        
       
        
        return res.json(priest);

    }
}