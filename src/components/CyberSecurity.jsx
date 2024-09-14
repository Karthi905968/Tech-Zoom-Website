import React from 'react'
import '../assets/css/WebDevelopment.css'
import cs from '../assets/img/cs.png'
import Img24 from '../assets/img/Img24.png'
import Img25 from '../assets/img/Img25.png'
import Img26 from '../assets/img/Img26.png'
import Img27 from '../assets/img/Img27.png'
import Technologies3 from '../assets/img/Technologies3.png'
import csRoadmap from '../assets/img/CS-Roadmap.png'
import { Link } from 'react-router-dom'

const CyberSecurity = () => {
  return (
   <>
    <div className='wd-course'>
       <div className="wd-section1">
       <img src={cs} alt="wd" />
           <section>
            <h1>Launch Your Journey as a <span>Cyber Security Specialist</span></h1>
            <p>Start your Cyber Security journey and dive into the dynamic world of protecting digital assets. Whether you're a beginner or looking to advance your skills, Cyber Security offers limitless potential to defend against cyber threats, safeguard information, and ensure system integrity. With the right guidance and learning resources, you can develop valuable skills in network security, cryptography, and ethical hacking, leading to a successful and impactful career in this ever-growing field.</p>
           </section>

           
       </div>

       <div className="wd-section2">
        <h2>Cyber Security Learning Path</h2>
        <img src={csRoadmap} alt="ds-roadmap" />
       </div>
    </div>

    <div className="wd-section5">
        <main>
        <section>
            <h1>Schedule Your Free Consultation</h1>
            <p>Need Help? Get Your Questions Answered Now!</p>
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
             <img src={Technologies3} alt="" />
       </div>
    </div>
   </>

   
  )
}

export default CyberSecurity
