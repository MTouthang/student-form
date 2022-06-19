const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      maxlength: 40,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 10,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
