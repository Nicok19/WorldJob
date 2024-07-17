import styles from './showData.module.css';
import World3D from './world3d';


export default function ShowData() {
  return (
    <section className={styles.showData}>
      <div className={styles.showData__informationAndWorld}>
        <div className={styles.showData__flag}>
          <svg xmlns="http://www.w3.org/2000/svg" width="384" height="102" viewBox="0 0 384 102" fill="none">
            <path d="M384 0.5L-93.5 34V102L384 68V0.5Z" fill="#5D5FEF" />
          </svg>
        </div>

        <div className={styles.showData__information}>
          <h2>
            We have helped thousands of people to seek <span className={styles.newHorizon}>new horizons</span>
          </h2>
          <p>
            Thousands of people have used Worldjob to emigrate to other countries in a faster and safer way.
          </p>
          <div className={styles.showData__numbers}>
            <div className={styles.number}>
              <h3>+ 100k</h3>
              <h4>Apk <br /> Downloads</h4>
            </div>
            <div className={styles.number}>
              <h3>+ 30k</h3>
              <h4>Mentoring <br /> Services</h4>
            </div>
            <div className={styles.number}>
              <h3>+ 500k</h3>
              <h4>People <br /> Connected</h4>
            </div>
          </div>
        </div>
        <World3D />
      </div>
     

    </section>
  );
}
