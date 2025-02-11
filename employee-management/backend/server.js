const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();  
console.log("MONGO_URI:", process.env.MONGO_URI);

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Use employee routes
app.use('/api/employees', employeeRoutes);

// MongoDB Connection
const mongooseOptions = {
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000,
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Test Route
app.get('/test', (req, res) => {
  res.send('Server is working!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
