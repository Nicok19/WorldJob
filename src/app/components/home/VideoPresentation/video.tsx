import React from 'react';
import styles from './video.module.css';

const WorldjobVideo: React.FC = () => {
  return (

    <section className={styles.container}>
      <div className={styles.video}>
      <video src="./PromotionWorldjob.mp4" controls poster="./worldjobTemplate.jpg"></video>
      </div>
      <div className={styles.information}>
        <h2 className={styles.information__title}>Watch the UX/UI Project</h2>
        <p className={styles.information__paragraph}>
        Worldjob is a personal project that I created to showcase my skills as both a front-end developer and a UX/UI designer. If you want to see the UX/UI development, I invite you to click on the following button.</p>

        <a  href="https://www.behance.net/gallery/137845083/Apk-WorldJob" target="_blank" className={styles.information__button}>View project</a>


      </div>
    </section>
  );
}

export default WorldjobVideo;

