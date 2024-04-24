const { DataTypes } = require('sequelize');
const sequelize = require('../utils/dbConfig'); // Assuming you have configured Sequelize and connected to the database

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_status: {
      type: DataTypes.ENUM('active', 'inactive', 'suspended'),
      allowNull: false,
      defaultValue: 'active',
    },
    registrationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    whatsapp_number: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    address: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING(100),
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING(100),
      defaultValue: null,
    },
    country: {
      type: DataTypes.STRING(100),
      defaultValue: null,
    },
    pin: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    profile_image: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    account_type: {
      type: DataTypes.ENUM('visitor', 'business', 'admin'),
      allowNull: false,
      defaultValue: 'visitor',
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      defaultValue: null,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    website: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    social_media_handles: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    otp: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: false,
    },
    otp_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    last_updated_at: {
      type: DataTypes.DATEONLY,
      defaultValue: null,
    },
  },
  {
    tableName: 'users',
    timestamps: false, // Assuming there are no createdAt and updatedAt fields in the table
  },
);

module.exports = User;
