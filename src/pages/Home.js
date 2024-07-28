import React, { useState } from 'react';
import './Home.css';
import IndexHeader from '../components/IndexHeader';
import ProjectCard from '../components/ProjectCard';


const Home = () =>{

    return(
      <div className='main-container'>
          <div className='home-container'>
             <section className='about-section'>
                 <div className='about-card-container'>
                     <div className='about-card'>
                        <div className='card-head'><h2>Profile Card</h2> <button className='cv-btn'>CV</button></div>
                        <div className='card-image-con'>
                           <img src='./assets/dp.jpg' className='about-image' />
                        </div>
                        <div className='card-info-con'>
                           <p className='degree'>B.Sc in Computer Science and Engineering</p>
                           <p>Daffodil International University</p>
                           <p>Dhaka, Bangladesh</p>
                           <p><span> G </span><span> L </span> <span> I </span></p>
                        </div>
                        <button className='mail-btn'>Send Mail</button>
                     </div>
                 </div>
                 <div className='about-decription-container'>
                    <IndexHeader title1={"Intro"}/>
                    <p className='my-keys'><span className='key'>Compettitive Programming | </span><span className='key'>Development | </span><span className='key'>Design</span></p>
                    <p>Developed a student-focused food delivery
                        and management website enabling meal or-
                        dering and monthly planning from home or
                        hostel. Implemented hotel integration for weekly
                        meal orders, providImplemented hotel integration for weekly
                        meal orders, providing students with diverse
                        dining options. Created a robust backend for hotels to man-
                        age menus, orders, and historical data, enhanc-
                        ing operational eﬃciency.ing students with diverse
                        dining options.
                    </p>
                    <h3></h3>
                    <p>
                        <span className='attribute'>Programming Language:</span>
                        <span className='attr-value'> C, </span>
                        <span className='attr-value'>C++, </span>
                        <span className='attr-value'>Golang, </span>
                        <span className='attr-value'>JavaScript, </span>
                        <span className='attr-value'>Dart, </span>
                        <span className='attr-value'>Python</span>
                    </p>
                    <h3 style={{color:"black"}} >Skills</h3>
                    <ul>
                        <li>
                            <div className='skill-container'>
                               <h4 className='skill-title'>Mobile App Development</h4>
                               <p><span>Libraries & Frameworks: </span><span className='skill-tool'>Flutter</span></p>
                               <p className='skill-description'>Develop mobile app using flutter. </p>
                            </div>
                        </li>
                        <li>
                            <div className='skill-container'>
                               <h4 className='skill-title'>Full Stack Web Development</h4>
                               <p>
                                    <span>Libraries & Frameworks: </span>
                                    <span class="skill-tool">React, </span>
                                    <span class="skill-tool">Nodejs, </span>
                                    <span class="skill-tool">ExpressJs, </span>
                              </p>
                               <p className='skill-description'>Develop mobile app using flutter. </p>
                            </div>
                        </li>
                        <li>
                            <div className='skill-container'>
                               <h4 className='skill-title'>Api Development</h4>
                               <p>
                                    <span>Libraries & Frameworks: </span>
                                    <span class="skill-tool">Gin, </span>
                                    <span class="skill-tool">ExpressJs, </span>
                                </p>
                               <p className='skill-description'>Develop mobile app using flutter. </p>
                            </div>
                        </li>
                    </ul>
                 </div>
             </section>

             <section className='project-section'>
                 <IndexHeader
                   title1={"Projects"}
                 />
                 <div className='project-card-container'> 
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>

                 </div>
                 
             </section>
             
             <section className='activity-section'>
               <IndexHeader
                 title1={"Activities & Hobbies"}
               />
               <div className='activity-wrapper'>
                 <div className='activity-card'>

                    <div className='activity-data'>
                         <h3 className='activity-title'>Protography</h3>
                         <p className='activity-p-con'>Profiles</p>
                         <p className='activity-p-con'>Photos</p>
                         <div className='photo-gallery'>
                             <img src='./assets/kikki.jpeg' className='photo-gallery-img p-g-i1'/>
                             <img src='./assets/kikki.jpeg' className='photo-gallery-img p-g-i2'/>
                             <img src='./assets/kikki.jpeg' className='photo-gallery-img p-g-i3'/>
                             <img src='./assets/kikki.jpeg' className='photo-gallery-img p-g-i4'/>
                             <img src='./assets/kikki.jpeg' className='photo-gallery-img p-g-i5'/>
                         </div>
                    </div>
                    <div className='activity-image-con'>
                         <img className='activity-img' src='./assets/dp1.jpg'/>
                         <p>Travel Photographer</p>
                    </div>
                 </div>

               </div>
               <div className='slide-circle-container'><div className="slide-circle"></div><div className='slide-circle'></div><div className='slide-circle'></div><div className='slide-circle'></div></div>

             </section>

             <section className='sitemap-section'>
 
                  <div>
                      SiteMap
                  </div>
                  <div>
                      ShortProfiles
                  </div>
                  <div>
                      Vector 
                  </div>
             
             
             </section>
          </div>
      </div>
    );
}

export default Home;