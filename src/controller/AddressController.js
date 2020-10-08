const Address = require('../model/Address');

module.exports = {
    async store(req,res){
        const {country, zipcode, street, number,city} = req.body;
        

        try {
            const address = await Address.create({
                country,
                zipcode,
                street,
                number,
                city,
            });
            return res.json(address);
        } catch (error) {
            return res.status(400).json(error);
        }
        
    },
    async list(req,res){
        try {
            const addresses = await Address.findAll();

            return res.json(addresses);
        } catch (error) {
            return res.status(400).json(error);
        }
         
    }
}