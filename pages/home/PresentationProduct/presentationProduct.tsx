import Image from "next/image";
import styles from "./presentationProduct.module.css";


function PresentationProduct() {
  return (
    <section className={styles.container}>

<div className={styles.container__data}>
    <h1>Live<br></br>Anywhere</h1>
    <p>Worldjob is the first application designed for people who want to emigrate quickly and safely</p>


    <a href="https://www.behance.net/gallery/137845083/Apk-WorldJob" target="_blank" rel="noopener noreferrer" className={styles.container__data__button}>
  Download
</a>


</div>

<div className={styles.container__image}>
<Image src="/Cellphone.png" width={602} height={733} alt="Phone" />
</div>


    </section>
  );
}
export default PresentationProduct;