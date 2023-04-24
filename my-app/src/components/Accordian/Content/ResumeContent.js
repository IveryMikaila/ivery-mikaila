const Experience = ()=>{
    return(
    <>
     {/* Job 1 */}
    <div className='experienceHeading'>
    <h1>Job Title <br/> PLace of work</h1>
    <h1 className="date">Date of work</h1>
    </div>
   <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
   </ul>
       {/* Job 2 */}
       <div className='experienceHeading'>
    <h1>Job Title <br/> PLace of work</h1>
    <h1 className="date">Date of wokrk</h1>
    </div>
   <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
   </ul>
       {/* Job 3 */}
       <div className='experienceHeading'>
    <h1>Job Title <br/> PLace of work</h1>
    <h1 className="date">Date of wokrk</h1>
    </div>
   <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
   </ul>
    </>
    );
    };

    const Education = ()=>{
        return(
        <>
         {/* College */}
        <div className='experienceHeading'>
        <h1>Job Title <br/> PLace of work</h1>
        <h1 className="date">Date of wokrk</h1>
        </div>
       <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
       </ul>
           {/* SheCodes Cert */}
           <div className='experienceHeading'>
        <h1>Job Title <br/> PLace of work</h1>
        <h1 className="date">Date of wokrk</h1>
        </div>
       <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
       </ul>
           {/* NSLS Cert */}
           <div className='experienceHeading'>
        <h1>Job Title <br/> PLace of work</h1>
        <h1 className="date">Date of wokrk</h1>
        </div>
       <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
       </ul>
       <div className="skills">
        Skills I'm Profficent in: Images of skills will go here
       </div>
        </>
        );
        };

const Contact = ()=>{
    return(
    <>
EmailIconhere <span> iverymikaila@gmail.com</span>
LocationIconHere <span> Brooklyn, New York</span>
PhoneIconHere <span> 347-517-9898</span>
    </>
    );
    };
    
    
    
    export const ResumeContent = 
        {
            contentLink1:`Experience`,
            contentLink2: `Education, Skills, etc`,
            contentLink3:`Contact Information`,
            content1Heading:`Experience`,
            content2Heading:`Education, Skills, & Certifications`,
            content3Heading:`Contact Information`,
            content1: Experience(),
            content2:Education(),
            content3: Contact()
        }
    ;