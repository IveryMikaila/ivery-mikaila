import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Navbar from './Navbar/Navbar';
import Accordian from './Accordian';


const Home = () => {
  return (
  <>
  <Navbar />
  <div className='logoContainer'>
  <div className='homeLogo'>
   <Link to={'/'}>Mikaila Ivery</Link>
  </div>
  </div>
  <Accordian />
  </>
  )
}

export default Home;