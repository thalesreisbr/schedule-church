const {Model, DataTypes} = require('sequelize');


class Faithful extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.DATE,
            document: DataTypes.STRING,
        },{
            sequelize
        }
        );
    }
    static associate(models){
        
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsToMany(models.Mass, { foreignKey: 'faithful_id', through: 'mass_faithful', as: 'masses' });
    }   
}
module.exports = Faithful;