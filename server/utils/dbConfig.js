const mongoose = require('mongoose');
const logger = require('./logger');
const config = require('./../../config/index');

// MongoDB connection parameters
const uri = config.mongoDB.uri;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected successfully to MongoDB');
  } catch (err) {
    logger.error('Unable to connect to MongoDB:', err);
  }
};

mongoose.connection.on('error', (err) => {
  logger.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  logger.info('MongoDB connection established');
});

connectToMongoDB();

module.exports = {
  mongoose,
};
