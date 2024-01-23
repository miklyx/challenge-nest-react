'use client'

import styles from "./page.module.css";
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; 
import { Beer } from './beer';
import { BarChart } from "./BarComponent";


export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>About graph + fetch data</p>
        </div>

        <div className={styles.center}>
          <div>
            <BarChart />
          </div>

        </div>

        <div className={styles.grid}>
        <p>Copyright</p>
        </div>
      </main>
    </ApolloProvider>
  );
}
