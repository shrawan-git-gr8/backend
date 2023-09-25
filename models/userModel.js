import mongoose from "mongoose";

let userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    default: null,
  },
  lastName: {
    type: String,
    required: true,
    default: null,
  },
  email: {
    type: String,
    required: true,
    default: null,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be of 8 characters"],
    select: false,
  },
  avatar: [
    {
      type: string,
    },
  ],
  contact: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  token: {
    type: string,
  },
});

module.exports = mongoose.model("User", userModel);
