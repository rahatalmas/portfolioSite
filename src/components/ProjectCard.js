import React, { useEffect, useState } from 'react';

const ProjectCard = () =>{

    const images = [
        "assets/html.png","assets/python.png"
    ]
    const classes = ["slide-circle-active","slide-circle"]
    const [idx,setIdx] = useState(0);
    const [activeClass,setActiveClass] = useState(classes[0])

    useEffect(()=>{
        const interval = setInterval(()=>{
           setIdx((idx)=>{
             if(idx === (images.length-1)){
                return 0
             }else{
                return idx+1
             }
           });
        },5000)
        return ()=>clearInterval(interval)
    },[])

    return(
        <div className='project-card'>
        <div className='project-card-image-con'>
            <img className='project-card-img' src='./assets/kikki.jpeg'/>
            <div className='slide-circle-container'><div className={activeClass}></div><div className='slide-circle'></div></div>
            <h3 className='project-domain'>Hunger</h3>
        </div>
        <div className='project-card-info'>
             <h1 className='project-title'>Food Delivery Website</h1>
             <p className='project-description'>PHP, Nodejs, Mysql, HTML, CSS</p>
             <p className='project-description'>Hello This website is student Based Food Delivery</p>
             <p className='project-description'>Students can plan about their monthly Meal and order.</p>

             <div className='project-btn-container'>
                <button className='p-c-btn'>Live Link</button>
                <button className='p-c-btn'>Source Code</button>
             </div>
        </div>
    </div>
    );
}

export default ProjectCard;