'use client'
import styles from './page.module.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; 
import { ToggleButton } from './ToggleButton';


export default function Home() : JSX.Element {
  return (
    <ApolloProvider client={client}>
      <main className={styles.main}>
        <ToggleButton />
      </main>
    </ApolloProvider>
  );
}
