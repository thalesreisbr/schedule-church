const Mass = require('../model/Mass');
const Faithful = require('../model/Faithful');
const Church = require('../model/Church');
const { startOfDay, endOfDay, parseISO } = require('date-fns');
const { findByPk } = require('../model/Church');


module.exports = {
    async listAll(req,res){
        try{
            const masses = await Mass.findAll();
            return res.json(masses);
        } catch (error) {
            return res.status(400).json(error);
        }

    },
    async listByDate(req,res){
        var {date} = req.params;
         /*const masses = await Mass.findAll({
            date: {
                [Op.between]: [
                  startOfDay(parseISO(date)),
                  endOfDay(parseISO(date)),
                ],
            },
        });*/
        const masses = await Mass.findByDate(startOfDay(parseISO(date)),endOfDay(parseISO(date)));
        
        //console.log(date);
        //const masses = await Mass.findByDate(date);
        return res.json(masses);
    },
    async listByDateBetween(req,res){
        const {date1,date2} = req.params;
        console.log(date1,date2);
    
        const masses = await Mass.findByDate(startOfDay(parseISO(date1)),endOfDay(parseISO(date2)));
    
        return res.json(masses);
        
    },
    async listByCityInDate(req,res){
        const {city,date} = req.params;
        const masses = await Mass.findByCityAndDate(city,startOfDay(parseISO(date)),endOfDay(parseISO(date)));

        return res.json(masses);



    },
    async listAllFaithful(req,res){
        const {mass_id} = req.params;
        const masses = await Mass.findAll({
            where:{id:mass_id},
            include: [{
                association:'faithfuls',
            }]
        });
        return res.json(masses);
    },
    async store(req,res){
        const {name, date, priest_id, church_id} = req.body;

        try {
            const mass = await Mass.create({
                name,
                date,
                priest_id,
                church_id
            });
            return res.json(mass);

        } catch (error) {
            return res.status(400).json(error);
        }
    }
    
}