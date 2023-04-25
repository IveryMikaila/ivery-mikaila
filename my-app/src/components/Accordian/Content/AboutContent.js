const aboutContent1 = ()=>{
    return(
        <>
        Hi, I’m Mikaila Ivery (also known by Mynk), welcome to my portfolio!  I’m a multifaceted creative who is passionate about writing, fine arts, and web development. I believe were all worth more than our job titles or what we do. We should see one another as human beings rather than cogs in a machine and I’m passionate about bringing this mentality to whichever team I join. I currently work as a Freelance Front-end Developer for Boy Blondey and Orèe Nyc based in Brooklyn, New York. My favorite way to pass time includes scrolling through Dribble to find web designs then bringing the design to life through the means of Javascript. 
        <br/>
        <br/>
        My favorite Javascript libraries are definitely React Js and Green Sock Animation Platform (GSAP). There's just something about playing with an animated button and scroll-based animations that excite the child in me. I also enjoy CSS, as most developers don’t understand how powerful this stylesheet language is. In regard to my personal life, I’m a devoted follower of Jesus Christ and am proud to force my religion on everyone I encounter. Okay, I’m just joking.I’m not one of the annoying Christians who don’t respect people’s boundaries. However, if you’re interested in learning about who Jesus is don’t hesitate to send me an email! I’ll just leave this scripture here (in case you’re interested) Psalms 136:2 NIV “ 2 Give thanks to the God of gods. His love endures forever.”
        </>
    )
}
const aboutContent2 = ()=>{
    return(
        <>
      It all started during my last semester in college. I was originally studying Communications and Journalism then was forced to take an elective in Statistics. This class demolished the fallacies I had about what could be impossible for me. I went into this course thinking I would be just above passing. However, I excelled in this class to such a degree that my teacher recommend I minored in math. Unfortunately, I didn’t end up minoring in math because I decided to “drop out” that semester. I did finish my associate's degree, however, I realized STEM was the path I wanted to take therefore it wasn’t logical to pursue a Bachelor’s degree. 
      <br/>
      <br/>
      One day as I was researching different STEM careers I stumbled across an advertisement for a free sixty-minute coding class by SheCodes Workshops. I attended the free SheCodes introduction course back in 2021. The rest is history. Not only did I graduate with my associate's degree from the Fashion Institute of Technology that year, but also earned my first certificate in Javascript. Learning Javascript for the first time during finals week was definitely the hardest challenge I’ve experienced as a student. Nonetheless, this ordeal forced me to face my subconscious imposter syndrome, not only as a Black person but as a woman as well. I thought I wasn’t “smart” enough to work in STEM. And low and behold, I proved myself wrong.  As a proud She Codes alumni my goal is to demolish the misconceptions about working in STEM and erase the gender gap in a male-dominated industry because we code too. 
        </>
    )
}


export const AboutContent = 
    {
        contentLink1:`Who I am`,
        contentLink2: `My Code Journey`,
        contentLink3:`What's next for me?`,
        content1Heading:`Who I am`,
        content2Heading:`My Code Journey`,
        content3Heading:`What's next for me?`,
        content1:aboutContent1(),

        content2:aboutContent2(),

        content3: `My current goals as a developer include joining an official team and leaving Freelancing behind, as well as growing my knowledge of mobile development. I’m currently sharpening my skills in React Js and React Native to work towards these objectives. I’m also interested in C# in regard to mobile apps and games. Finally, I’m working towards growing my Youtube Channel for future coding tutorials and challenges. Hopefully, we can cross paths along our coding journeys!`
    }
;