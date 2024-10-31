const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  hospital: String,
  hospitalName: String,
  pain: String,
  painLevel: Number,
  medication: String,
  medicationInfo: String,
  depression: String
});

module.exports = mongoose.model('Patient', patientSchema);