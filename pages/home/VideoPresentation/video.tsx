import React from 'react';
import styles from './video.module.css';

const WorldjobVideo: React.FC = () => {
  return (

    <section id="about" className={styles.container}>
      <div className={styles.video}>
      <video src="./https://imgur.com/LNby0zH.mp4" controls poster="./worldjobTemplate.jpg"></video>
      </div>
      <div className={styles.information}>
        <h2 className={styles.information__title}>About WorldJob</h2>
        <p className={styles.information__paragraph}>
        Worldjob is an application that will help you emigrate to a new country by connecting you with compatriots living in your destination and assisting you in finding jobs or scholarships.</p>

        <a  href="https://support.google.com/googleplay/?hl=es&sjid=1793490182847360166-SA#topic=3364260" target="_blank" className={styles.information__button}>Download</a>


      </div>
    </section>
  );
}

export default WorldjobVideo;

