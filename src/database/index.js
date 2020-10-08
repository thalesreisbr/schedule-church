const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Address = require('../model/Address');
const User = require('../model/User');
const Priest = require('../model/Priest');
const Faithful = require('../model/Faithful');
const Church = require('../model/Church');
const Mass = require('../model/Mass');

const connection = new Sequelize(dbConfig);

Address.init(connection);
User.init(connection);
Priest.init(connection);
Faithful.init(connection);
Church.init(connection);
Mass.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Priest.associate(connection.models);
Faithful.associate(connection.models);
Church.associate(connection.models);
Mass.associate(connection.models);

module.exports = connection;