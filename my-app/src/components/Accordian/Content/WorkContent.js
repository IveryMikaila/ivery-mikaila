import textImg from '../../../assets/images/bgImg3.gif'

const displayWork = ()=>{
    return(
    <>
    <p>*Images will go here*</p>
    <img src={textImg} style={{width:'100px'}} alt='randomTest' />
    </>
    );
    };
    
    
    
    export const WorkContent = 
        {
            contentLink1:`School Projects`,
            contentLink2: `Freelance Developer`,
            contentLink3:`Work`,
            content1Heading:`School / Personal Projects`,
            content2Heading:`Freelance Front-end Developer`,
            content3Heading:`Work`,
            content1:`The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
    
            Static and dynamic content editing
            A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
            
            How to customize formatting for each rich text
            Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.`,
    
            content2:`The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
    
            Static and dynamic content editing
            A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
            
            How to customize formatting for each rich text
            Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.`,
    
            content3: displayWork(),
            path1:'/#Work1',
            path2:'/#Work2',
            path3:'/#Work3', 
            id1:'Work1',
            id2:'Work2',
            id3:'Work3',
        }
    ;