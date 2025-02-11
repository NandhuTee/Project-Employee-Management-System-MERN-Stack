import { useState } from 'react';
import { EmployeeProvider } from './context/EmployeeContext';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  return (
    <EmployeeProvider>
      <div>
        <h1>Employee Management</h1>
        <EmployeeForm employeeToEdit={employeeToEdit} setEmployeeToEdit={setEmployeeToEdit} />
        <EmployeeList setEmployeeToEdit={setEmployeeToEdit} />
      </div>
    </EmployeeProvider>
  );
};

export default App;
