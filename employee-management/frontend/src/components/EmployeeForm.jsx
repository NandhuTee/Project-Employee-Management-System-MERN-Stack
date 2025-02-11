import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeForm = ({ employeeToEdit, setEmployeeToEdit }) => {
  const { addEmployee, updateEmployee } = useContext(EmployeeContext); // Get functions from context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    salary: ''
  });

  useEffect(() => {
    if (employeeToEdit) {
      setFormData({
        name: employeeToEdit.name,
        email: employeeToEdit.email,
        age: employeeToEdit.age,
        salary: employeeToEdit.salary
      });
    }
  }, [employeeToEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If editing, update the employee
    if (employeeToEdit) {
      updateEmployee(employeeToEdit._id, formData);
    } else {
      // If adding a new employee
      addEmployee(formData);
    }

    setEmployeeToEdit(null); // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      age: '',
      salary: ''
    }); // Reset the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Salary"
      />
      <button type="submit">{employeeToEdit ? 'Update' : 'Submit'}</button>
    </form>
  );
};

EmployeeForm.propTypes = {
  employeeToEdit: PropTypes.object,
  setEmployeeToEdit: PropTypes.func.isRequired
};

export default EmployeeForm;
