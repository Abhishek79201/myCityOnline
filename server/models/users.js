const { mongoose } = require("../utils/dbConfig");


const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 255,
    },
    username: {
      type: String,
      maxlength: 100,
      default: null,
    },
    password: {
      type: String,
      maxlength: 255,
      default: null,
    },
    first_name: {
      type: String,
      default: null,
    },
    last_name: {
      type: String,
      default: null,
    },
    account_status: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'inactive',
    },
    profile_image: {
      type: String,
      maxlength: 255,
      default: null,
    },
    account_type: {
      type: String,
      enum: ['individual', 'organization', 'admin'],
      default: 'individual',
    },
    account_visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
    age: {
      type: Number,
      default: null,
    },
    otp: {
      type: String,
      default: null,
    },
    otp_verified: {
      type: Boolean,
      default: false,
    },
    login_method: {
      type: String,
      enum: ['email', 'google'],
      default: 'email',
    },
    google_id: {
      type: String,
      default: null,
    },
    google_profile: {
      first_name: { type: String, default: null },
      last_name: { type: String, default: null },
      profile_image: { type: String, default: null },
    },
    notifications: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Notification',
    }],
    reminders: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reminder',
    }],
    notes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note',
    }],
    journal: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Journal',
    }],
    rooms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    }],
    connections: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Connection',
    }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('User', userSchema);


const User = mongoose.model('User', userSchema);
module.exports = User;
