import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData.js';
import '../../styles/Navbar.css';

const Navbar = () => {
  const[sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
{/* Navigation Bar */}
  <div id='navBar' className='navBar'>
  <div className='navLeftLinks'>
  <Link to={''}>GitHub</Link>
 <Link to={''}>LinkedIn</Link>
 <Link to={''}>Youtube</Link>
 <Link to={''}>SheCodes</Link>
  </div>
<div className='navRightLinks'>
  <div className='emailBtnCaption'>Hello</div>
  <Link id='emailBtn' to={"mailto:iverymikaila@gmail.com"}>Email Me</Link>
</div>
    </div>
{/* Sidebar Menu */}
<svg className='sidebarMenu-svg' onClick={showSidebar}  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
{/* Sidebar */}
<nav className={sidebar ? 'sideBar active' : 'sideBar'}>
<svg className='sidebarMenuClose-svg' onClick={showSidebar} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg>
<ul className='sideBar-items'>
{SidebarData.map((item,index) =>{
  return(
       <li  onClick={showSidebar} key={index} className={item.cName}>
      <Link target='_blank' to={item.path} >
      <div>{item.title}</div>
      </Link>
    </li>
  )
})}
</ul>
</nav>
  </>
  )
}

export default Navbar;