const Sequelize = require('sequelize');
const logger = require('./logger');

// Initialize Sequelize with database connection parameters
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // or your host IP
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// Define your models here
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
});

// Define associations, validations, etc. here

// Synchronize the models with the database
sequelize
  .sync()
  .then(() => {
    logger.info('Database synchronized');
  })
  .catch((err) => {
    logger.info('Unable to synchronize database:', err);
  });

module.exports = {
  sequelize,
  User,
  // Other models if any
};
