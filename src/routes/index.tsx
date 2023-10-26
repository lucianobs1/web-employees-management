import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Employees } from '../pages/Employees';
import { EmployeeDetails } from '../pages/EmployeeDetails';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/employees" Component={Employees} />
      <Route path="/employee-details/:id" Component={EmployeeDetails} />
    </Routes>
  );
}
