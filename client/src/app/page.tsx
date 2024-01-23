'use client'

import styles from "./page.module.css";
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; 
import { ToggleButton } from "./ToggleButton";


export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className={styles.main}>
        <div className={styles.center}>
            <ToggleButton />
        </div>
      </main>
    </ApolloProvider>
  );
}
