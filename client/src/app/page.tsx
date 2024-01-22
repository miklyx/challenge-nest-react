'use client'

import styles from "./page.module.css";
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; 
import { Beer } from "./beer";


export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>About graph + fetch data</p>
        </div>

        <div className={styles.center}>
          <p>Graphics</p>
          <p>The front-end part will be a React application that queries and displays the data returned by the back-end as a graph, e.g. as a line chart, bar chart, etc. Feel free to use any visualization library that you choose, e.g. Nivo. The interface will allow to:
  query new batch of data from the back-end;
  switch the type of the graph, e.g. from a line chart to a bar chart.</p>
          <div>
            <Beer />
          </div>
        </div>

        <div className={styles.grid}>
        <p>Copyright</p>
        </div>
      </main>
    </ApolloProvider>
  );
}
