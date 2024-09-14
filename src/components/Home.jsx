import React from 'react'
import Img2 from '../assets/img/Img2.png'
import Img3 from '../assets/img/Img3.png'
import Img4 from '../assets/img/Img4.png'
import Img5 from '../assets/img/Img5.png'
import Img6 from '../assets/img/Img6.png'
import Img7 from '../assets/img/Img7.png'
import Img8 from '../assets/img/Img8.png'
import Img9 from '../assets/img/Img9.png'
import Img10 from '../assets/img/Img10.png'
import Img11 from '../assets/img/Img11.png'
import Img12 from '../assets/img/Img12.png'
import Img13 from '../assets/img/Img13.png'
import Img27 from '../assets/img/Img27.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='container'>
       <div className="section2">
          <div className="text1">
            <h5>
            The <span>Smart</span> <br />
            Choice For <span>Future</span>
            </h5>
            <h6>
            Techzoom is an Online Bootcamp offering expert-led courses in web development, data science, networking, and more, designed to boost your tech career.
            </h6>
            <div className='icons'>
                 <img src={Img11} alt="Img11" />
                 <div className='icon-txt'>
                 Learn The Latest Skills
                 </div>
            </div>
            <div className='icons'>
                 <img src={Img12} alt="Img12" />
                 <div className='icon-txt'>
                 Get Ready For a Career
                 </div>
            </div>
            <div className='icons'>
                 <img src={Img13} alt="Img13" />
                 <div className='icon-txt'>
                 Easily Accessible
                 </div>
            </div>
            <div className='booking-button'>
              <Link to='/bookings'>Join Now!</Link>
            </div>
          </div>
          <img src={Img4} alt="Img10" className='Img4'/>
       </div>
       <div className="section1">
       <div  className='company'>
         <img src={Img2} alt="Img2" className='Img2'/>
         <img src={Img3} alt="Img3" className='Img3'/>
       </div>
       </div>
       <div className="section2">
            <img src={Img10} alt="Img4" className='Img4'/>
          <div className="text1">
            <h3><span>Community Hub</span> - Share Your Thoughts and Ideas</h3>
            <p>Explore our vibrant Community Hub – your go-to place for engaging discussions, shared insights, and collective support. Connect with a diverse group of learners and expand your horizons. Embark on a journey of collaborative learning and growth with us!</p>
          </div>
       </div>
       <div className="section3">
        <p>Why Choose Us?</p>
        <h1>Benefits of online tutoring services with us</h1>
        <section className='grid1'>
              <div>
                <h1>01</h1>
                 <h2>Flexible Learning Schedule</h2>
                 <p>Fit your coursework around your existing commitments and obligations efficiently.</p>
                 <img src={Img5} alt="Img5" />
              </div>

              <div>
                <h1>02</h1>
                 <h2>Expert Instruction</h2>
                 <p>Learn from industry experts who have hands-on experience in design and development.</p>
                 <img src={Img5} alt="Img5" />
              </div>

              <div>
                <h1>03</h1>
                 <h2>Diverse Course Offerings</h2>
                 <p>Explore a wide range of design and development courses covering various topics.</p>
                 <img src={Img5} alt="Img5" />
              </div>

              <div>
                <h1>04</h1>
                 <h2>Updated Curriculum</h2>
                 <p>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                 <img src={Img5} alt="Img5" />
              </div>

              <div>
                <h1>05</h1>
                 <h2>Practical Projects and Assignments</h2>
                 <p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                 <img src={Img5} alt="Img5" />
              </div>

              <div>
                <h1>06</h1>
                 <h2>Interactive Learning Environment</h2>
                 <p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                 <img src={Img5} alt="Img5" />
              </div>
        </section>
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

   <div className="container">

      <div className="section4">
           <h1>Our Courses</h1>
           <p>Empower Your Future with Top-Tier Learning Opportunities</p>
           <div className='grid2'>
              <section>
              <img src={Img6} alt="Img6" />
              <h1>Full Stack Web Development</h1>
              <p>Learn full-stack web development with expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, and server-side programming, to build complete and dynamic websites and applications.</p>
              </section>

              <section>
              <img src={Img7} alt="Img7" />
              <h1>Data Science</h1>
              <p>Master data science with a focus on advanced analytics, statistical methods, and machine learning techniques, including Python, SQL, and data visualization, to uncover insights and drive data-driven decision-making.</p>              </section>
              <section>
              <img src={Img8} alt="Img9" />
              <h1>Cybersecurity</h1>
              <p>Learn to safeguard digital systems and data. Master key principles like threat detection, risk assessment, encryption, and incident response to protect against cyber threats.</p>
              </section>

              <section>
              <img src={Img9} alt="Img10" />
              <h1>Networking Foundations</h1>
              <p>Build a strong foundation in networking principles, covering key concepts such as TCP/IP, routing, switching, and network security, to design, manage, and troubleshoot modern IT infrastructures effectively.</p>
              </section>
           </div>
       </div>

       {/* <div className='home-section5'>
        <h1>Placements</h1>
       </div> */}
   </div>
    </>
  )
}

export default Home
