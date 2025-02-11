const mongoose = require('mongoose');

// Define the schema for an Employee
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Employee name is mandatory
  },
  email: {
    type: String,
    required: true, // Email is mandatory
    unique: true, // Ensure no duplicates
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Basic email format validation
  },
  age: {
    type: Number,
    required: true, // Age is mandatory
    min: 18, // Minimum age is 18
  },
  salary: {
    type: Number,
    required: true, // Salary is mandatory
    min: 0, // Salary cannot be negative
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create a model based on the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee; // Export the Employee model to use in other parts of the app
