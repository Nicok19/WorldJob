import style from './solutions.module.css';
import Image from 'next/image';
import { SectionTitle } from '../../../../styles/H1__SectionTitle';
import { WatchMore } from '../../../../styles/Button__WatchMore';

 export default function Solutions() {

return(
<div className={style.generalContainer}>
<SectionTitle className={style.generalContainer__title}>Solutions</SectionTitle>


{/* 1st section */}
<div className={style.container}>  

<div className={style.textAndInfo}>

<div className={style.icons}>
<Image src="/iconChat.png" width={54} height={54} alt="Chat icon" />
<h3>Chat</h3>
</div>

<h2>Chat with compatriots who live where you want to live</h2>
<p>Chat with fellow countrymen who live in the city you want to go in a personalized way and discover how to plan your country change in the best possible way.</p>
<WatchMore>Watch more</WatchMore>
</div>

<video width="400" height="431" autoPlay muted playsInline>
  <source src="chat2.mp4" type="video/mp4" />
</video>
</div>


{/* 2nd section */}
<div className={style.container}>  

<div className={style.textAndInfo}>

<div className={style.icons}>
<Image src="/icon-Communities.png" width={54} height={54} alt="Communitie icon" />
<h3>Communities</h3>
</div>

<h2>Find compatriots communities abroad</h2>
<p>find communities of compatriots in the new country you want to go to live.</p>
<WatchMore>Watch more</WatchMore>
</div>

<video width="400" height="431" autoPlay muted playsInline>
  <source src="pals.mp4" type="video/mp4" />
</video>
</div>


{/* 3trd section */}
<div className={style.container}>  

<div className={style.textAndInfo}>

<div className={style.icons}>
<Image src="/icon-work-and-study.png" width={54} height={54} alt="Communitie icon" />
<h3>Communities</h3>
</div>

<h2>Apply for jobs and scholarships in your new country</h2>
<p>Apply to job offers and study scholarships in the country where you want to live from the comfort of your home and with monitoring of each application in real time.</p>
<WatchMore>Watch more</WatchMore>
</div>

<video width="400" height="431" autoPlay muted playsInline>
  <source src="workAndStudy2.mp4" type="video/mp4"/>
</video>
</div>



{/* 4rt section */}
<div className={style.container}>  

<div className={style.textAndInfo}>

<div className={style.icons}>
<Image src="/icon-work-and-study.png" width={54} height={54} alt="Communitie icon" />
<h3>Mentoring</h3>
</div>

<h2>Get help with immigration procedures</h2>
<p>Our team of professionals will advise you and take care of all the necessary immigration procedures to enter your new country legally and safely.</p>
<WatchMore>Watch more</WatchMore>
</div>

<video width="400" height="431" autoPlay muted playsInline>
  <source src="plane.mp4" type="video/mp4"/>
</video>
</div>






</div>
)

}
