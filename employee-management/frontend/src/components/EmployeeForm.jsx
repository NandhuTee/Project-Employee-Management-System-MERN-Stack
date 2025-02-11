import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const EmployeeForm = ({ employeeToEdit, setEmployeeToEdit }) => {
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
    // Handle form submission logic
    setEmployeeToEdit(null); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
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
      <button type="submit">Submit</button>
    </form>
  );
};

EmployeeForm.propTypes = {
  employeeToEdit: PropTypes.object,
  setEmployeeToEdit: PropTypes.func.isRequired
};

export default EmployeeForm;
