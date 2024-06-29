// pages/index.js
import styles from "./index.module.css";
import '../styles/globals.css';
import Header from "@/app/components/shared/header/header";
import BackgroundGradient from "@/app/components/home/backgroundGradient/backgroundGradient";
import PresentationProduct from "@/app/components/home/PresentationProduct/presentationProduct";
import Solutions from "@/app/components/home/Solutions/solutions";
import ShowData from "@/app/components/home/ShowData/showData";
import Footer from "@/app/components/shared/footer/footer";
import WorldjobVideo from "@/app/components/home/VideoPresentation/video";



export default function Home() {
  return (
    <div className={styles.container}>
      <BackgroundGradient>
        <Header />
        <PresentationProduct />
      </BackgroundGradient>

      <WorldjobVideo />
  
      <ShowData />
      <Solutions />

      <Footer />
    </div>
  );
}

