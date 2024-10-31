const express = require('express');
const Patient = require('../models/Pateint');
const router = express.Router();

router.post('/submit', async (req, res) => {
  const patientData = req.body;
  const newPatient = new Patient(patientData);
  try {
    await newPatient.save();
    res.status(201).json({ message: 'Submission successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving submission' });
  }
});

module.exports = router;