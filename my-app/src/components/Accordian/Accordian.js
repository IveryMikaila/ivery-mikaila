import React,{useState} from 'react'
import '../../styles/Accordian.css';

const Accordian = ({headingNumber,headingTitle,headingSummary,contentLink1,contentLink2,contentLink3,content1Heading,content2Heading,content3Heading,content1,content2,content3,path1,path2,path3,id1,id2,id3}) => {
const [show, setShow] = useState(true);

  return (
    <div className='accordianWrapper'>
      
      {/* Accordian Heading */}
<div className='accordianHeading' onClick={()=>setShow(!show)}>
    <div className='title-container'>
      <div className='number'>{headingNumber}</div>
      <div className='sectionTitle'>{headingTitle}</div>
      <div className='icon' >
        +
      </div>
    </div>
    <div className='summary-container'>
      <div className='summary'>
        {headingSummary}
      </div>
  </div>
</div>

{/* Accordian Content */}
{show? 
  <div className="accordianContent">
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
<div className='content-paragraphs'>
{content3}
</div>
  </div>
</div>
:
null
}
    </div>
  )
}

export default Accordian;