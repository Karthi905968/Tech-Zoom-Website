import React from 'react'
import '../assets/css/Projects.css'
import iconP from '../assets/img/Icon-p.png'
import eCommerce from '../assets/img/E-commerce1.png'
import portfolio from '../assets/img/Portfolio.png'
import  ProjectImg from '../assets/img/Projects-img.png'
import taskManagement from '../assets/img/task management system.jpg'
import clusterAnalysis from '../assets/img/cluster-analysis.png'
import predictiveAnalysis from '../assets/img/Predictive-Analytics.jpg'
import VulnerabilityTool from '../assets/img/Vulnerability-tool.jpg'
import chatApp from '../assets/img/Build-Chat-Messaging-App.png'
import sentimentalAnalysis from '../assets/img/Sentiment-Analysis-in-Social-Media.jpg'
import IntrusionDetection from '../assets/img/Intrusion-Detection.jpg'
const Projects = () => {
  return (
    <div className='Projects-page'>
      <div className="project-section1">
        <img src={ProjectImg} alt="ProjectImg" />
        <section>
            <h1>Explore <span>Real-World</span> Projects</h1>
            <p>Welcome to our Projects Showcase! Explore a variety of projects in Full Stack Development, Data Science, Cyber Security, and more. Each project is designed to provide hands-on experience and practical insights. Whether you're a beginner or an experienced developer, our project library will help you enhance your skills and grow your portfolio. Dive in, learn by doing, and get job-ready!</p>
        </section>
      </div>

      <div className="about-section2">
        <h1>PROJECTS OUTCOMES</h1>
        <p>Explore the tangible results and key impacts of our projects</p>
        <div className="goals">
          <section>
            <img src={iconP} alt="iconP" />
            <h1> Practical Application of Skills</h1>
            <p> Students will apply theoretical knowledge in real-world scenarios, helping them develop hands-on experience with the technologies and methodologies they have learned during the course.</p>
          </section>
          
          <section>
            <img src={iconP} alt="iconP" />
            <h1>Problem-Solving and Critical Thinking</h1>
            <p>By working on challenging projects, students will enhance their ability to analyze problems, break them down into manageable components, and devise efficient solutions.</p>
          </section>

          <section>
            <img src={iconP} alt="iconP" />
            <h1>Collaboration and Teamwork</h1>
            <p> Group-based projects will foster collaboration, communication, and teamwork, helping students prepare for professional environments where these skills are essential.</p>
          </section>

          <section>
            <img src={iconP} alt="iconP" />
            <h1>Exposure to Industry Standards</h1>
            <p>Students will learn to follow industry best practices in coding, design, and development, ensuring their projects meet professional standards for quality and maintainability.</p>
          </section>

          <section>
            <img src={iconP} alt="iconP" />
            <h1>Portfolio Development</h1>
            <p>Upon completion, students will have built a portfolio of projects that demonstrates their technical skills, making them more attractive to potential employers in the job market.</p>
          </section>

          <section>
            <img src={iconP} alt="iconP" />
            <h1>Confidence in Independent Project Execution</h1>
            <p>By completing end-to-end projects, students will gain the confidence to tackle real-world challenges independently, preparing them for roles where self-driven work is valued.</p>
          </section>
        </div>
       </div>

       <div className='project-section2'>
          <h1>Project Showcase</h1>
          <p>View our curated collection of projects that highlight our expertise and innovation</p>
          <section>
            <img src={eCommerce} alt="e-commerce" />
            <main>
                <h2>E-Commerce Platform</h2>
                <h1><span>Description : </span>Developed a robust e-commerce platform featuring user authentication, product catalogs, a shopping cart, and secure checkout. Includes an admin panel for product and order management, showcasing both front-end and back-end development skills with a responsive design.</h1>
                <h1><span>Tech Used : </span>React, Node.js, Express, MongoDB</h1>
            </main>
          </section>

          <section>
            <img src={taskManagement} alt="taskManagement" />
            <main>
                <h2>Task Management Application</h2>
                <h1><span>Description : </span>A task management application that lets users create, organize, and track tasks efficiently. Features include user authentication, task creation, categorization, deadline setting, and reminders. The application has a responsive design for both desktop and mobile devices.</h1>
                <h1><span>Tech Used : </span>HTML, CSS, JavaScript, React, Redux, Django</h1>
            </main>
          </section>

          <section>
            <img src={portfolio} alt="e-commerce" />
            <main>
                <h2>Portfolio Website</h2>
                <h1><span>Description : </span>A sleek personal portfolio website highlighting skills, projects, and achievements. It includes sections for an about me, project showcases, and contact information, designed with a focus on aesthetics and user experience. The site also features interactive elements to engage visitors and showcase work effectively.</h1>
                <h1><span>Tech Used : </span>HTML, CSS, JavaScript, React</h1>
            </main>
          </section>

          <section>
            <img src={clusterAnalysis} alt="e-commerce" />
            <main>
                <h2>Customer Segmentation Analysis</h2>
                <h1><span>Description : </span>Analyzes customer data to identify segments based on behavior and demographics using clustering techniques. Provides insights for targeted marketing and personalized offers to enhance engagement.</h1>
                <h1><span>Tech Used : </span>Python, Pandas, Scikit-learn</h1>
            </main>
          </section>

          <section>
            <img src={predictiveAnalysis} alt="e-commerce" />
            <main>
                <h2>Predictive Analytics for Sales Forecasting</h2>
                <h1><span>Description : </span>Develops a machine learning model to predict future sales based on historical data. Utilizes statistical techniques and algorithms to forecast trends and inform business strategies. Enhances decision-making with accurate predictions and actionable insights.</h1>
                <h1><span>Tech Used : </span>Python, TensorFlow, Keras</h1>
            </main>
          </section>

          <section>
            <img src={sentimentalAnalysis} alt="e-commerce" />
            <main>
                <h2>Sentiment Analysis on Social Media</h2>
                <h1><span>Description : </span>Analyzes social media posts to determine sentiment (positive, negative, neutral) using NLP techniques. Visualizes trends and provides insights for brand management or market research.</h1>
                <h1><span>Tech Used : </span>Python, NLTK, Pandas, Matplotlib</h1>
            </main>
          </section>

          <section>
            <img src={VulnerabilityTool} alt="e-commerce" />
            <main>
                <h2>Vulnerability Assessment Tool</h2>
                <h1><span>Description : </span>Scans and identifies security vulnerabilities in web applications, providing detailed reports to enhance security measures and protect against potential threats. Offers recommendations for remediation to strengthen overall application security.</h1>
                <h1><span>Tech Used : </span>Python, OWASP, Nmap</h1>
            </main>
          </section>

          <section>
            <img src={chatApp} alt="e-commerce" />
            <main>
                <h2>Secure Chat Application</h2>
                <h1><span>Description : </span>An encrypted messaging app ensuring secure and private communication between users. Features end-to-end encryption and real-time messaging for enhanced security.</h1>
                <h1><span>Tech Used : </span>JavaScript, Node.js, WebSocket</h1>
            </main>
          </section>

          {/*  */}

          <section>
            <img src={IntrusionDetection} alt="e-commerce" />
            <main>
                <h2>Intrusion Detection System</h2>
                <h1><span>Description : </span>Monitors network traffic to identify suspicious activities and potential breaches. Uses machine learning to detect anomalies and generate alerts, enhancing network security and response.</h1>
                <h1><span>Tech Used : </span>Python, Scikit-learn, Snort</h1>
            </main>
          </section>
       </div>
    </div>
  )
}

export default Projects
