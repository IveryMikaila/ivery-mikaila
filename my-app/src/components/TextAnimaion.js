import React,{ useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Work.css';

gsap.registerPlugin(ScrollTrigger);

const TextAnimaion = ({projectTitle}) => {
const titleRef = useRef(null);
useEffect(()=>{
const title = titleRef.current;
gsap.fromTo(title,
    { x:300},
    { x:-300,duration:5,
      // repeat:true,
         scrollTrigger:{
         trigger:title,

}});

},[]);

  return (
    <div className='projectTitle' ref={titleRef}>
        {projectTitle}
        </div>
  )
}

export default TextAnimaion;