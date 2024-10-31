const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const adminRoutes = require('./src/routes/admin');
const patientRoutes = require('./src/routes/patient');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hope-auto-checkin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api/admin', adminRoutes);
app.use('/api/patient', patientRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});