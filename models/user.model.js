const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    category: String, // dev/designer
    profilePic: String,
    email: String,
    social: [],
    skills: [],
    conferences: [String], // name of conference
    meetups: [String],
    fbId: String,
    authToken: String,
    role: String, // <empty>/admin
    city: String,
    country: String,
    socialId: String,
    provider: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);