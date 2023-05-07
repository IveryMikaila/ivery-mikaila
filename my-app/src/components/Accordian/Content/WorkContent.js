//React Imports
import {Link} from 'react-router-dom';

//Css Import
import '../../../styles/Work.css';

//Component Imports 
// import TextAnimaion from '../../TextAnimaion';
import Slides from '../../Slides';

const displayWork = ()=>{
    return(
    <>
    <Slides />
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
            I currently work as a Freelance Front-end Developer in Brooklyn New York. A significant amount of my freelance clients are from Shopify, as I have expertise in e-commerce. I bring my client’s vision to life by coding custom HTML, CSS, and Javascript in their Shopify Liquid themes. I also aid in the web design process using technologies such as Figma, Photoshop, and Canva. I’ve worked with over five different teams within the last 6 months and hope to follow in the same trajectory. Some of my work can be found below.
            `,
    
            content3: displayWork()
        }
    ;