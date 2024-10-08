import Image from "next/image";
import styles from "./presentationProduct.module.css";


function PresentationProduct() {
  return (
    <section className={styles.container}>

<div className={styles.container__data}>
    <h1>Live<br></br>Anywhere</h1>
    <p>Worldjob is the first application designed for people who want to emigrate quickly and safely</p>

<div className={styles.container__buttons}>

  <div className={styles.container__data__button}>
    <Image src="/ios.png" alt="ios" width={40} height={40} />
    <a href="https://support.apple.com/es-es" target="_blank" rel="noopener noreferrer" >
  Download
</a>
</div>
</div>

<div className={styles.container__buttons}>
  <div className={styles.container__data__button}>
    <Image src="/playstore.png" alt="ios" width={40} height={40} />
    <a href="https://support.google.com/googleplay/?hl=es&sjid=1793490182847360166-SA#topic=3364260" target="_blank" rel="noopener noreferrer" >
  Download
</a>
</div>
</div>


</div>

<div className={styles.container__image}>
<Image src="/Cellphone.png" width={602} height={733} alt="Phone" />
</div>


    </section>
  );
}
export default PresentationProduct;