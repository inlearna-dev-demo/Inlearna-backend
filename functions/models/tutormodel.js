const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  language: {type: [String], required: true},

  availability: {
    type: [String],
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  hours: {
    type: Map,
    of: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    min: [0, "Rate must be a positive number"],
  },
  qualifications: {type: String},

  experience: {type: Number},
  reviews: [
    {
      reviewerName: {type: String},
      rating: {type: Number, min: 1, max: 5},
      comment: {type: String},
    },
  ],
});

const Tutors = mongoose.model("Tutors", tutorSchema);

module.exports = Tutors;
