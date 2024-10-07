// pages/index.js
import styles from "./index.module.css";
import '../styles/globals.css';
import Header from "@/app/components/header/header";
import BackgroundGradient from "./home/backgroundGradient/backgroundGradient";
import PresentationProduct from "./home/PresentationProduct/presentationProduct";
import Solutions from "./home/Solutions/solutions";
import ShowData from "./home/ShowData/showData";
import Footer from "@/app/components/footer/footer";
import WorldjobVideo from "./home/VideoPresentation/video";



export default function Home() {
  return (
    <div className={styles.container}>
       <Header />
      <BackgroundGradient>
        <PresentationProduct />
      </BackgroundGradient>

      <WorldjobVideo />
  
      <ShowData />
      <Solutions />

      <Footer />
    </div>
  );
}

