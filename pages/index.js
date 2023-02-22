/* eslint-disable import/extensions */
import Head from 'next/head';

import Home from '@/views/Home';
import styles from './Home.module.scss';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Home />
    </div>
  );
}
