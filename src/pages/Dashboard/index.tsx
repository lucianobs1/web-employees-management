import { Layout } from '../../components/Layout';

import styles from './dashboard.module.css';

export function Dashboard() {
  return (
    <Layout>
      <h1 className={styles.title}>Dashboard</h1>

      <main className={styles.dashboard_container}>
        <header>
          <div>
            <h3>Funcionários</h3>
            <span>3</span>
          </div>

          <div>
            <h3>Bancos Registrados</h3>
            <span>12</span>
          </div>
        </header>
      </main>
    </Layout>
  );
}
