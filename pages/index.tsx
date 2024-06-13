// pages/index.js
import styles from "./index.module.css";
import '../styles/globals.css';
import Header from "../src/app/components/shared/header/header";
import BackgroundGradient from "../src/app/components/home/section__backgroundGradient/backgroundGradient";
import PresentationProduct from "../src/app/components/home/section__PresetntationProduct/presentationProduct";
import Solutions from "@/app/components/home/article__Solutions/solutions";
import ShowData from "@/app/components/home/section__ShowData/showData";
import Blog from "@/app/components/home/section__Blog/blog";

export default function Home() {
  return (
    <div className={styles.container}>
      <BackgroundGradient>
        <Header />
        <PresentationProduct />
      </BackgroundGradient>
      <Solutions />
      <ShowData />
      <Blog/>
    </div>
  );
}

