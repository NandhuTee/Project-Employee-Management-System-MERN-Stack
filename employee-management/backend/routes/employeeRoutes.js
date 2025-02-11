const express = require('express');
const Employee = require('../models/Employee'); // Import the Employee model

const router = express.Router();

// POST: Create a new employee
router.post('/add', async (req, res) => {
  try {
    const { name, email, age, salary } = req.body;

    if (!name || !email || !age || !salary) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newEmployee = new Employee({
      name,
      email,
      age,
      salary,
    });

    await newEmployee.save(); // Save the new employee in the database
    res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
  } catch (error) {
    console.error('Error adding employee:', error); // Log the error details for debugging
    res.status(500).json({ message: 'Error adding employee', error: error.message });
  }
});

// GET: Fetch all employees (now with the /api prefix)
router.get('/display', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
});

// GET: Fetch a single employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ employee });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error: error.message });
  }
});

// PUT: Update an employee's information
router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body, // Update with new data from the request body
      { new: true } // Return the updated employee object
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error: error.message });
  }
});

// DELETE: Delete an employee by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id); // Delete employee by ID
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error: error.message });
  }
});

module.exports = router;
