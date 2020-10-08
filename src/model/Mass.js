const {Model, DataTypes, Op} = require('sequelize');
const Church = require('../model/Church');

class Mass extends Model{
    static init(sequelize){
        super.init({
            name : DataTypes.STRING,
            date : DataTypes.DATE,
        },{
            sequelize
        });
    }
    static associate(models){
        this.belongsTo(models.Church,{foreignKey:"church_id", as :"church"});
        this.belongsTo(models.Priest, {foreignKey:"priest_id", as:"priest"});
        this.belongsToMany(models.Faithful,{foreignKey:'mass_id', through: 'mass_faithful', as : 'faithfuls'});
    }
    static async findByDate(dateBegin, dateEnd){
       /* try {
            const masses = await Mass.findAll({
                where:{
                    date: {
                        [Op.between]: [
                            dateBegin,
                            dateEnd,
                          ],
                    },
                }
            });
        } catch (error) {
            return error;
        }*/
        const masses = await Mass.findAll({
            where:{
                date: {
                    [Op.between]: [
                        dateBegin,
                        dateEnd,
                      ],
                },
            }
        });
        
        return masses;
    }
    static async findByCityAndDate(city,dateBegin,dateEnd){
        const masses = await Mass.findAll({
            
            where:{
                date: {
                    [Op.between]: [
                        dateBegin,
                        dateEnd,
                      ],
                },
                
            },
            include: [{
                association: 'church',
                include:[{
                    association:'address',
                    where:{city:city}
                }]
            }]

        });
        return masses;
    }  
    
}
module.exports = Mass;