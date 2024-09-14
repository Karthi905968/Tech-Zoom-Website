import React from 'react'
import girlImg from '../assets/img/girl-img1.png'
import Img15 from '../assets/img/Img15.png'
import Img16 from '../assets/img/Img16.png'
import Img17 from '../assets/img/Img17.png'
import Img18 from '../assets/img/Img18.png'
import Img19 from '../assets/img/Img19.png'
import Img20 from '../assets/img/Img20.png'
import Img21 from '../assets/img/Img21.png'
import Img22 from '../assets/img/Img22.png'
import manImg from '../assets/img/manImg.png'
import { Link } from 'react-router-dom'
// import Img23 from '../assets/img/Img23.png'
import Group66 from '../assets/img/Group 66.png'
import '../assets/css/about.css'
const About = () => {
  return (
    <div className='about-page'>
       <div className="about-section1">
        <section>
        <h1>
        Empowering Learning for Everyone, Anytime, Across the Globe!
        </h1>
        <p>
        Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
        </p>
        <div className='booking-button'>
              <Link to='/bookings'>Join Now!</Link>
        </div>
        </section>
        <img src={girlImg} alt="girl img" />
       </div>

       <div className="about-section2">
        <h1>Our Goals</h1>
        <p>Transformative education in design and development.</p>
        <div className="goals">
          <section>
            <img src={Img15} alt="Img15" />
            <h1>Provide Practical Skills</h1>
            <p>We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
          </section>
          
          <section>
            <img src={Img16} alt="Img16" />
            <h1>Foster Creative Problem-Solving</h1>
            <p>We cultivate creativity and problem-solving, enabling students to face real-world challenges with confidence. Our hands-on approach equips them to find innovative solutions and make impactful contributions.</p>
          </section>

          <section>
            <img src={Img17} alt="Img17" />
            <h1>Promote Collaboration and Community</h1>
            <p>We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
          </section>

          <section>
            <img src={Img18} alt="Img18" />
            <h1>Stay Ahead of the Curve</h1>
            <p>The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
          </section>
        </div>
       </div>

       <div className='img-section'>
          <img src={Group66} alt="Group66" />
       </div>

       <div className="about-section2">
        <h1>Achievements</h1>
        <p>Driven by excellence, remarkable milestones throughout our journey.</p>
        <div className="goals">
          <section>
            <img src={Img19} alt="Img19" />
            <h1>Trusted by Thousands</h1>
            <p>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
          </section>
          
          <section>
            <img src={Img20} alt="Img20" />
            <h1>Award-Winning Courses</h1>
            <p>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
          </section>

          <section>
            <img src={Img21} alt="Img21" />
            <h1>Positive Student Feedback</h1>
            <p>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
          </section>

          <section>
            <img src={Img22} alt="Img22" />
            <h1>Industry Partnerships</h1>
            <p>We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies</p>
          </section>
        </div>
       </div>

       <div className="about-section3">
        <section>
          <h1><span>Together</span>, let's shape the future of digital innovation</h1>
          <p>Join us in shaping the future of digital innovation and unlock endless possibilities in design and development. This journey equips you with the skills and knowledge to thrive in today’s tech landscape. Whether creating groundbreaking applications or driving digital transformation, we’re here to guide your growth. Together, we'll explore cutting-edge tools and technologies to help you turn your passion into expertise and lead the way in tomorrow’s digital world.</p>
          <div className='booking-button'>
              <Link to='/bookings'>Book your slot now!</Link>
          </div>
        </section>
        <img src={manImg} alt="manImg" />
       </div>
    </div>
  )
}

export default About
