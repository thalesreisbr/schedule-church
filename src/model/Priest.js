const { Model, DataTypes } = require('sequelize');

class Priest extends Model{
    
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.DATE,
            position: DataTypes.STRING,
        },{
            sequelize
        });
    }
    static associate(models) {
        this.hasMany(models.Mass, { foreignKey: 'priest_id', as: 'masses'});
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsToMany(models.Church, { foreignKey: 'priest_id', through: 'church_priest', as: 'churchs' });
    }
}
module.exports = Priest;