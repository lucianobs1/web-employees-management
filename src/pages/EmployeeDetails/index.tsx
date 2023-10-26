import { Layout } from '../../components/Layout';

import styles from './employee_details.module.css';

export function EmployeeDetails() {
  return (
    <Layout>
      <div className={styles.container}>
        <aside>
          <div className={styles.wrapper_perfil}>
            <img
              src="https://avatars.githubusercontent.com/u/47507696?v=4"
              alt="perfil"
            />

            <div className={styles.wrapper_perfil_description}>
              <h4>Luciano Brandão Silva</h4>
              <span>Operador de monitoramento</span>

              <footer>
                <h5>Funcionário desde Novembro de 2020</h5>
              </footer>
            </div>
          </div>
        </aside>

        <main>
          <div>
            <h2>Banco de Horas</h2>
            <span>0</span>
          </div>

          <div>
            <h2>Total de faltas</h2>
            <span>0</span>
          </div>
        </main>
      </div>
    </Layout>
  );
}
