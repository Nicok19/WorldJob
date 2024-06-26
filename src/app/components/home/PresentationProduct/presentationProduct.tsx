import Image from "next/image";
import styles from "./presentationProduct.module.css";

function PresentationProduct() {
  return (
    <section className={styles.container}>

<div className={styles.container__data}>
    <h1>Live<br></br>Anywhere</h1>
    <p>Worldjob is the first application designed for people who want to emigrate quickly and safely</p>
    <button className={styles.container__data__button}> Download </button>

</div>

<div className={styles.container__image}>
<Image src="/Cellphone.png" width={602} height={733} alt="Phone" />
</div>


    </section>
  );
}
export default PresentationProduct;