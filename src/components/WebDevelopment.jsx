import React from 'react'
import '../assets/css/WebDevelopment.css'
import wd from '../assets/img/wd.png'
import Img24 from '../assets/img/Img24.png'
import Img25 from '../assets/img/Img25.png'
import Img26 from '../assets/img/Img26.png'
import Img27 from '../assets/img/Img27.png'
import Technologies from '../assets/img/Technologies.png'
import wdRoadmap from '../assets/img/WD-Roadmap.png'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
  return (
   <>
    <div className='wd-course'>
       <div className="wd-section1">
         <img src={wd} alt="wd" />
           <section>
            <h1>Launch Your Journey as a Full Stack <span>Web Developer</span></h1>
            <p>Start your Web development journey and explore the exciting world of technology. Whether you're new or want to improve your skills, web development gives you endless opportunities to create websites and digital solutions. With the right learning and guidance, you can build important skills in coding, design, and problem-solving, leading to a rewarding career.</p>
           </section>
       </div>

       <div className="wd-section2">
        <h2>Web Development Learning Path</h2>
        <img src={wdRoadmap} alt="wd-roadmap" />
       </div>
    </div>

    <div className="wd-section5">
        <main>
        <section>
            <h1>Schedule Your Free Consultation</h1>
            <h2>Need Help? Get Your Questions Answered Now!</h2>
            <p>Reach out to our Academic Counsellor today for answers to all your questions!</p>
            <Link to='/bookings'>Book yor slot now!</Link>
            </section>
        <img src={Img27} alt="Img27" />
        </main>
    </div>

    <div className="wd-course">
    <div className='wd-section3'>
          <h2>Course Overview</h2>
          <div>
            <img src={Img24} alt="Img24" />
            <section>
                <h1><span>One-on-One</span> Discussions</h1>
                <p>Students will have the opportunity for one-on-one discussions with experienced instructors to receive personalized guidance and feedback throughout the course.</p>
            </section>
          </div>

          <div>
           
            <section>
            <h1>Innovative <span>Project-Focused</span> Learning</h1>
                <p>At the core of our educational philosophy is Innovative Project-Focused Learning, a dynamic approach designed to immerse students in real-world applications from the start.</p>
            </section>
            <img src={Img25} alt="Img25" />
          </div>

          <div>
            <img src={Img26} alt="Img26" />
            <section>
            <h1><span>Career</span> Development Assistance</h1>
               
                <p>Navigating your career path can be challenging, but with the right guidance, you can unlock new opportunities and achieve your professional goals.</p>
            </section>
          </div>
       </div>

       <div className='wd-section4'>
            <h1>Tech Stack and Tools Covered</h1>
             <img src={Technologies} alt="" />
       </div>
    </div>
   </>

   
  )
}

export default WebDevelopment
