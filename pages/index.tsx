// pages/index.js
import styles from "./index.module.css";
import '../styles/globals.css';
import Header from "@/app/components/shared/header/header";
import BackgroundGradient from "@/app/components/home/backgroundGradient/backgroundGradient";
import PresentationProduct from "@/app/components/home/PresentationProduct/presentationProduct";
import Solutions from "@/app/components/home/Solutions/solutions";
import ShowData from "@/app/components/home/ShowData/showData";
import Blog from "@/app/components/home/Blog/blog";
import Footer from "@/app/components/shared/footer/footer";



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
      <Footer />
    </div>
  );
}

