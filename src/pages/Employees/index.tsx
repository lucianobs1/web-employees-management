import { Link } from 'react-router-dom';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { Layout } from '../../components/Layout';

import styles from './employees.module.css';

export function Employees() {
  return (
    <Layout>
      <div className={styles.employee_search_wrapper}>
        <h1 className={styles.title}>Funcionários </h1>

        <form>
          <input type="text" placeholder="Buscar por nome" />
          <button>
            <FaSearch size={16} color="#fff" />
          </button>
        </form>
      </div>

      <ul className={styles.employee_grid}>
        <li className={styles.employee_wrapper}>
          <Link
            to="/employee-details/1"
            className={styles.employee_wrapper_link}
          >
            <img
              src="https://avatars.githubusercontent.com/u/47507696?v=4"
              alt="perfil"
            />

            <div>
              <p>Luciano Brandão</p>
              <data>
                <FaBirthdayCake size={14} color="fb528f" />
                25/11/1991
              </data>
            </div>
          </Link>
        </li>

        <li className={styles.employee_wrapper}>
          <Link
            to="/employee-details/2"
            className={styles.employee_wrapper_link}
          >
            <img
              src="https://avatars.githubusercontent.com/u/47507696?v=4"
              alt="perfil"
            />

            <div>
              <p>Luciano Brandão</p>
              <data>
                <FaBirthdayCake size={14} color="fb528f" />
                25/11/1991
              </data>
            </div>
          </Link>
        </li>

        <li className={styles.employee_wrapper}>
          <Link
            to="/employee-details/3"
            className={styles.employee_wrapper_link}
          >
            <img
              src="https://avatars.githubusercontent.com/u/47507696?v=4"
              alt="perfil"
            />

            <div>
              <p>Luciano Brandão</p>
              <data>
                <FaBirthdayCake size={14} color="fb528f" />
                25/11/1991
              </data>
            </div>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
