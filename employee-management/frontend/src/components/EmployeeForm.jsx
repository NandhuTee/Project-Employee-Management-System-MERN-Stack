import  { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeForm = ({ employeeToEdit, setEmployeeToEdit }) => {
  const { addEmployee, updateEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    if (employeeToEdit) {
      setName(employeeToEdit.name);
      setEmail(employeeToEdit.email);
      setAge(employeeToEdit.age);
      setSalary(employeeToEdit.salary);
    }
  }, [employeeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = { name, email, age, salary };

    if (employeeToEdit) {
      updateEmployee(employeeToEdit._id, employeeData);
      setEmployeeToEdit(null); // Clear the editing state after update
    } else {
      addEmployee(employeeData);
    }

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
    setSalary('');
  };

  return (
    <div>
      <h2>{employeeToEdit ? 'Update Employee' : 'Add New Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </label>
        <button type="submit">{employeeToEdit ? 'Update Employee' : 'Add Employee'}</button>
      </form>
    </div>
  );
};
EmployeeForm.propTypes = {
  employeeToEdit: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  setEmployeeToEdit: PropTypes.func.isRequired,
};

export default EmployeeForm;

