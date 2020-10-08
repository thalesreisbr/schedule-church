module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'schedule-church',
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  },
};