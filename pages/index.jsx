import Head from 'next/head';
import Counter from './features/counter/Counter';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Redux App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.App}>
        <div className={styles.header}>
          <img src="/logo.svg" className={styles.logo} alt="logo" />
          <Counter />
          <p>
            Get started by editing <code>pages/index.js</code>
          </p>
          <span>
            <span>Learn </span>
            <a
              className={styles.link}
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className={styles.link}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className={styles.link}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
