//Import Css
import '../../../styles/Work.css';
//Import Component


import textImg from '../../../assets/images/bgImg3.gif'

const displayWork = ()=>{
    return(
    <>
    <p>*Images will go here*</p>
    <img src={textImg} style={{width:'100px'}} alt='randomTest' />
    <div className='projectCard'>

    </div>
    </>
    );
    };
    
    
    
    export const WorkContent = 
        {
            contentLink1:`Personal/Education Projects`,
            contentLink2: `Freelance Developer`,
            contentLink3:`Work`,
            content1Heading:`Personal/Education Projects`,
            content2Heading:`Freelance Front-end Developer`,
            content3Heading:`Work`,
            content1:`The majority of my personal projects include recreating web designs I find online in React Js or Vanilla Javascript. However, my most recent projects include Candyl and the Job-list app. Candyl is a fake company I created that sells candles made of candy. The purpose of this project was to build an e-commerce store from scratch using Commerce Js API for the backend. Job-list is a mobile app prototype that helps you search for a job using a keyword in the search input. I used the J search API and React Native for that endeavor. My educational projects are based on assignments administered by SheCodes. My most notable projects from SheCodes include my dictionary app and weather app. The Weather app project was built using the Open Weather Map API, and the dictionary app was built using Google Dictionary API. To view my educational projects, check out my SheCodes profile in the navbar!`,
    
            content2:`
            I currently work as a Freelance Front-end Developer for Boy Blondey Co and Orée NYC. I bring my client’s vision to life by coding custom HTML, CSS, and Javascript then adding that to their Shopify themes. A significant amount of my freelance clients are from Shopify, including another client I worked with recently at Brooklyn House of Hair LLC. I also help in the actual web design process based on my client’s values and goals. 
            `,
    
            content3: displayWork()
        }
    ;