import  { useContext } from 'react';
import PropTypes from 'prop-types';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeList = ({ setEmployeeToEdit }) => {
  const { employees, deleteEmployee, loading } = useContext(EmployeeContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            <strong>{employee.name}</strong> - {employee.email} - {employee.age} - ${employee.salary}
            <button onClick={() => setEmployeeToEdit(employee)}>Edit</button>
            <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

EmployeeList.propTypes = {
  setEmployeeToEdit: PropTypes.func.isRequired,
};

export default EmployeeList;

