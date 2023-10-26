import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { NavLink, useLocation } from 'react-router-dom';
import styles from './dashboard-nav.module.css';

export function DashboardNav() {
  const location = useLocation();

  console.log(location);
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo" />

      <div>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                [isActive ? styles.active : ''].join(' ')
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                [isActive ? styles.active : ''].join(' ')
              }
            >
              Funcionários
            </NavLink>
          </li>
        </ul>
        <FiPower size={20} />
      </div>
    </header>
  );
}
