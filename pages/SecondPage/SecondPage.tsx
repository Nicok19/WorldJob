import Image from 'next/image';
import Link from 'next/link';
import style from './secondPages.module.css';
import '../../styles/globals.css';
import { DownloadApk } from '../../styles/Button__ApkDownload';



const SecondPage = () => {
  return (

    <div className={style.generalContainer}>
    <div className={style.container}>

      <div className={style.data}>
        <h1 className={style.data__title}>This is just a sample! <br></br> <span className={style.ttileSpan} >Watch the Ux/Ui Proccess</span></h1>
        <p className={style.data__paragraph}>If you want, you can see the UX/UI design process of this application by clicking the following button.</p>
        <DownloadApk href="https://www.behance.net/gallery/137845083/Apk-WorldJob" target="_blank" rel="noopener noreferrer">Watch  Ux/Ui</DownloadApk>


  
        <Link className={style.data__return} href="/">← Come Back</Link>
      </div>
      
      <div className={style.img}>
        <Image className={style.img__photo__one} src="/Cellphone-one.png" alt="Second Page" width={247} height={502} />
        <Image className={style.img__photo__two} src="/Cellphone-two.png" alt="Second Page" width={247} height={503} />
 </div>
    </div>
    </div>
  );
}

export default SecondPage;