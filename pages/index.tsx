import styles from "./index.module.css";
import '../styles/globals.css';
import Header from "../src/app/components/header/header";


export default function Home() {
  return (
    <div className={styles.container}>
<Header/>
    </div>
  );
}

