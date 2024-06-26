import styles from "./blog.module.css";
import Image from "next/image";



export default function Blog() {

return(

    <section className={styles.container}>
<h2 className={styles.container__title}>Blog</h2>



<div className={styles.allContainers}>

 {/** Left column */}
<div className={styles.leftContainer}>

    {/** Blog 1 */}

        <div className={styles.blog}>
            <div className={styles.blog__image}>
                <Image src="/bolog-first-image.png" alt="blog_image" width={400} height={400} />
            </div>

            <div className={styles.blog__icon}>
            <Image src="/blogIconGeneral.png" alt="blog_image" width={18} height={18} />
                <h4>General</h4>
            </div>

            <div className={styles.blog__text}>
                <h2>Best countrys to live</h2>
                <h3>By Juan Pérez </h3>
            </div>
        </div>

 {/** Blog 2 */}

        <div className={styles.blog}>
            <div className={styles.blog__image}>
                <Image src="/bolog-third-image.png" alt="work and travel icon" width={400} height={400} />
            </div>

            <div className={styles.blog__icon}>
            <Image src="/blogWork.png" alt="work and travel icon" width={18} height={18} />
                <h4>Work</h4>
            </div>

            <div className={styles.blog__text}>
                <h2>New work opportunities</h2>
                <h3>By Ana maría </h3>
            </div>
        </div>

         {/** Button */}
         <button className={styles.button__watchMore}>Watch more articles</button>

        </div>


    {/** Rigth column */}

        <div className={styles.rigthContainer}>

{/** Blog 3 */}

    <div className={styles.blog}>
        <div className={styles.blog__image}>
            <Image src="/bolog-second-image.png" alt="blog_image" width={400} height={400} />
        </div>

        <div className={styles.blog__icon}>
        <Image src="/blogVisa.png" alt="blog_image" width={18} height={18} />
            <h4>Visa and Working Holiday</h4>
        </div>

        <div className={styles.blog__text}>
            <h2>New Working Holidays regulations</h2>
            <h3>By Peter Alfonso </h3>
        </div>
    </div>

{/** Blog 4 */}

    <div className={styles.blog}>
        <div className={styles.blog__image}>
            <Image src="/bolog-four-image.png" alt="work and travel icon" width={400} height={400} />
        </div>

        <div className={styles.blog__icon}>
        <Image src="/blogWork.png" alt="work and travel icon" width={18} height={18} />
            <h4>Information about compatriots</h4>
        </div>

        <div className={styles.blog__text}>
            <h2>Increase the number 
            of Uruguayans in Sidney</h2>
            <h3>By Ana maría </h3>
        </div>
    </div>

    </div>














        </div>
    </section>
)

}