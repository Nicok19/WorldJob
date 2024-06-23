import Link from 'next/link';
import styles from '../styles/404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className={styles.link}>Go back home</a>
      </Link>
    </div>
  );
};

export default Custom404;
