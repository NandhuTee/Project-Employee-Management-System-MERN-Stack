import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Create the context
const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial list of employees
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees/display'); // Updated route
        setEmployees(response.data.employees); // Assuming the response has the 'employees' field
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employees', error);
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const addEmployee = async (newEmployee) => {
    try {
      const response = await axios.post('http://localhost:5000/api/employees/add', newEmployee); // Updated route
      setEmployees([...employees, response.data.employee]); // Assuming the response contains the added employee in 'employee'
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/employees/${id}`, updatedEmployee); // Updated route
      setEmployees(
        employees.map((emp) => (emp._id === id ? response.data.employee : emp)) // Assuming response contains updated employee
      );
    } catch (error) {
      console.error('Error updating employee', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`); // Updated route
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error('Error deleting employee', error);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee, loading }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EmployeeProvider, EmployeeContext };
