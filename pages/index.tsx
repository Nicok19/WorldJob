// pages/index.js
import styles from "./index.module.css";
import '../styles/globals.css';
import Header from "../src/app/components/header/header";
import BackgroundGradient from "../src/app/components/backgroundGradient/backgroundGradient";

export default function Home() {
  return (
    <div className={styles.container}>
      <BackgroundGradient>
        <Header />
      </BackgroundGradient>
    </div>
  );
}

