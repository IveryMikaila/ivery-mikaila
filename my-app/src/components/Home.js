import React from 'react'

//Component Imports
import Navbar from './Navbar/Navbar';
import Accordian from './Accordian/Accordian';

//Data Imports
import {About} from './Accordian/Headings/About';
import { AboutContent } from './Accordian/Content/AboutContent';
import {Work} from './Accordian/Headings/Work';
import{WorkContent} from './Accordian/Content/WorkContent';
import {Resume} from './Accordian/Headings/Resume';
import {ResumeContent} from './Accordian/Content/ResumeContent';


const Home = () => {
  return (
  <>
  <Navbar />
  <Accordian
  headingNumber = {About.headingNumber}
  headingTitle= {About.headingTitle}
  headingSummary= {About.headingSummary}
  contentLink1 = {AboutContent.contentLink1}
  contentLink2={AboutContent.contentLink2}
  contentLink3= {AboutContent.contentLink3}
  content1Heading= {AboutContent.content1Heading}
  content2Heading= {AboutContent.content2Heading}
  content3Heading= {AboutContent.content3Heading}
  content1= {AboutContent.content1}
  content2= {AboutContent.content2}
  content3= {AboutContent.content3}
  path1={AboutContent.path1}
  path2={AboutContent.path2}
  path3={AboutContent.path3}
  id1={AboutContent.id1}
  id2={AboutContent.id2}
  id3={AboutContent.id3}
  />
    <Accordian
  headingNumber = {Work.headingNumber}
  headingTitle= {Work.headingTitle}
  headingSummary= {Work.headingSummary}
  contentLink1 = {WorkContent.contentLink1}
  contentLink2={WorkContent.contentLink2}
  contentLink3= {WorkContent.contentLink3}
  content1Heading= {WorkContent.content1Heading}
  content2Heading= {WorkContent.content2Heading}
  content3Heading= {WorkContent.content3Heading}
  content1= {WorkContent.content1}
  content2= {WorkContent.content2}
  content3= {WorkContent.content3}
  path1={WorkContent.path1}
  path2={WorkContent.path2}
  path3={WorkContent.path3}
  id1={WorkContent.id1}
  id2={WorkContent.id2}
  id3={WorkContent.id3}
  />
      <Accordian
  headingNumber = {Resume.headingNumber}
  headingTitle= {Resume.headingTitle}
  headingSummary= {Resume.headingSummary}
  contentLink1 = {ResumeContent.contentLink1}
  contentLink2={ResumeContent.contentLink2}
  contentLink3= {ResumeContent.contentLink3}
  content1Heading= {ResumeContent.content1Heading}
  content2Heading= {ResumeContent.content2Heading}
  content3Heading= {ResumeContent.content3Heading}
  content1= {ResumeContent.content1}
  content2= {ResumeContent.content2}
  content3= {ResumeContent.content3}
  path1={ResumeContent.path1}
  path2={ResumeContent.path2}
  path3={ResumeContent.path3}
  id1={ResumeContent.id1}
  id2={ResumeContent.id2}
  id3={ResumeContent.id3}
  />
  </>
  )
}

export default Home;