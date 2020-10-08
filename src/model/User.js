const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name:  DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize
        });
    }
    static associate(models) {
        this.hasOne(models.Priest, { foreignKey: 'user_id', as: 'priest' });
        this.hasOne(models.Faithful, { foreignKey: 'user_id', as: 'faithful' });
    }
}
module.exports = User;