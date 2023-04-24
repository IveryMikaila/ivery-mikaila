import React from 'react'
import '../../styles/Accordian.css';

// Data Imports
import {About} from './Headings/About';
import { AboutContent } from './Content/AboutContent';
import {Work} from './Headings/Work';
import{WorkContent} from './Content/WorkContent';
import {Resume} from './Headings/Resume';
import {ResumeContent} from './Content/ResumeContent';

const Accordian = () => {

function checkboxChecker () {
const accordianTab1 = document.getElementById('acc1');
const accordianTab2 = document.getElementById('acc2');
const accordianTab3 = document.getElementById('acc3');

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');

if (accordianTab1.checked === true){
tab2.style.display ='none';
tab3.style.display ="none";
}
else if (accordianTab2.checked === true){
tab1.style.display ="none";
tab3.style.display = 'none';
}
else if(accordianTab3.checked === true){
tab1.style.display ='none';
tab2.style.display ='none';
}
else{
  tab1.style.display ='block';
  tab2.style.display ='block';
  tab3.style.display ='block';
}
 } 

  return (
     <div className='accordionWrapper'> 
     {/* Section 1 */}
<div className='accordion-tab ' id='tab1' onClick={checkboxChecker} >
<input type='checkbox' name='acc' id='acc1'  />
<label for='acc1'>
<span className='heading-number'>{About.headingNumber}</span>
  <h3 className='heading-title'>{About.headingTitle}
  <p className='heading-summary'>{About.headingSummary}</p>
  </h3>
</label>
<div className='content'>
 <div className='content-links'>
<a href={'/#about1'}>{AboutContent.contentLink1}</a>
<a href='/#about2'>{AboutContent.contentLink2}</a>
<a href={'/#about3'}>{AboutContent.contentLink3}</a> 
 </div>
 <div className='content-text'>
  <div id='about1' className='content-heading'>{AboutContent.content1Heading}</div>
 <div className='content1'> {AboutContent.content1} </div>
 <div id='about2' className='content-heading'>{AboutContent.content2Heading}</div>
 <div className='content2'> {AboutContent.content2} </div>
 <div id='about3' className='content-heading'>{AboutContent.content3Heading}</div>
 <div className='content3'> {AboutContent.content3} </div>
 </div>
</div>
</div>
{/* Section2 */}
<div className='accordion-tab ' id='tab2' onClick={checkboxChecker}>
<input type='checkbox' name='acc' id='acc2' />
<label for='acc2'>
<span className='heading-number'>{Work.headingNumber}</span>
  <h3 className='heading-title'>{Work.headingTitle}
  <p className='heading-summary'>{Work.headingSummary}</p>
  </h3>
</label>
<div className='content'>
<div className='content-links'>
<a href={'/#work1'}>{WorkContent.contentLink1}</a>
<a href='/#work2'>{WorkContent.contentLink2}</a>
<a href={'/#work3'}>{WorkContent.contentLink3}</a> 
 </div>
 <div className='content-text'>
  <div id='work1' className='content-heading'>{WorkContent.content1Heading}</div>
 <div className='content1'> {WorkContent.content1} </div>
 <div id='work2' className='content-heading'>{WorkContent.content2Heading}</div>
 <div className='content2'> {WorkContent.content2} </div>
 <div id='work3' className='content-heading'>{WorkContent.content3Heading}</div>
 <div className='content3'> {WorkContent.content3} </div>
 </div>
</div>
</div>
{/* Section 3 */}
<div className='accordion-tab ' id='tab3' onClick={checkboxChecker}>
<input type='checkbox' name='acc' id='acc3' />
<label for='acc3'>
<span className='heading-number'>{Resume.headingNumber}</span>
  <h3 className='heading-title'>{Resume.headingTitle}
  <p className='heading-summary'>{Resume.headingSummary}</p>
  </h3>
</label>
<div className='content'>
<div className='content-links'>
<a href={'/#resume1'}>{ResumeContent.contentLink1}</a>
<a href='/#resume2'>{ResumeContent.contentLink2}</a>
<a href={'/#resume3'}>{ResumeContent.contentLink3}</a> 
 </div>
 <div className='content-text'>
  <div id='resume1' className='content-heading'>{ResumeContent.content1Heading}</div>
 <div className='content1'> {ResumeContent.content1} </div>
 <div id='resume2' className='content-heading'>{ResumeContent.content2Heading}</div>
 <div className='content2'> {ResumeContent.content2} </div>
 <div id='resume3' className='content-heading'>{ResumeContent.content3Heading}</div>
 <div className='content3'> {ResumeContent.content3} </div>
 </div>
</div>
</div>
   </div> 
  )
}

export default Accordian;