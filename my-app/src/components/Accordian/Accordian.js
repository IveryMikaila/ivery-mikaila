import React from 'react'
import '../../styles/Accordian.css';

const Accordian = ({headingNumber,headingTitle,headingSummary,contentLink1,contentLink2,contentLink3,content1Heading,content2Heading,content3Heading,content1,content2,content3,path1,path2,path3,id1,id2,id3}) => {

  return (
    <div className='accordianWrapper'>


     
      
      {/* Accordian Heading */}
{/* <div className='accordianHeading'>
    <div className='title-container'>
      <div className='sectionTitle'> <span className='number'>{headingNumber}</span>{headingTitle}</div>
      <div className='icon' >
      <svg className='svg-Icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div className='summary-container'>
      <div className='summary'>
        {headingSummary}
      </div>
  </div>
</div> */}

{/* Accordian Content */}
  {/* <div className="accordianContent">
  <div className='content-links'>
<a href={path1}>{contentLink1}</a>
<a href={path2}>{contentLink2}</a>
<a href={path3}>{contentLink3}</a>
  </div>
  <div className='content-text'>
<h2 id={id1} className='contextHeading'>{content1Heading}</h2>
<div className='content-paragraphs'>
{content1}
</div>
<h2 id={id2} className='contextHeading'> {content2Heading}</h2>
<div className='content-paragraphs'>
{content2}
</div>
<h2 id={id3} className='contextHeading'> {content3Heading}</h2>
<div className='content-paragraphs endP'>
{content3}
</div>
  </div>
</div> */}
    </div>
  )
}

export default Accordian;