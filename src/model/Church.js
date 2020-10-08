const {Model, DataTypes} = require('sequelize');

class Church extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            capacity: DataTypes.INTEGER,
        },{
            sequelize
        });
    }
    static associate(models){
        this.hasMany(models.Mass, { foreignKey:'church_id' , as : 'masses'});
        this.belongsTo(models.Address, { foreignKey:'address_id', as: 'address' });
        this.belongsToMany(models.Priest, { foreignKey: 'church_id', through: 'church_priest', as: 'priests' });
    }
}
module.exports = Church;