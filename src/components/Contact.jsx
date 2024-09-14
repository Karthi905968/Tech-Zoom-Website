import React,{useState} from 'react';
import Img14 from "../assets/img/Img14.png";
import email from "../assets/img/email.png";
import phone from "../assets/img/phone.png";
import whatsapp from '../assets/img/Whatsapp.png'
import ButtonIcon from '../assets/img/Button-Icon.png'
import "../assets/css/Contact.css";
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[toggle,setToggle]=useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone){errors.phone = "Phone is required";
    }else if(formData.phone.length !== 10){
      errors.phone = "Phone Number is invalid";
    }
    if (!formData.message) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Handle successful form submission (e.g., send data to server)
  

    // Disable scrolling when the success message is shown
    document.body.style.overflow = 'hidden';


      // Reset form fields to empty
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      setIsSubmitted(false);
    }
  };
  

  const toggleChange=()=>{
    
    if(toggle){
      setToggle(false);
      document.body.style.overflow = 'scroll';
    }else{
      setToggle(true);
    }
  }



  return (
   <>
    <div className="contact-page">
      <div className="contact-page1">
        <img src={Img14} alt="Img14" />
        <section>
          <h1>Contact Us</h1>
          <p>
            TechZoom is a cutting-edge online bootcamp offering expert-led
            classes in web development, data science, and networking. Perfect
            for both beginners and seasoned professionals, our flexible and
            interactive courses provide hands-on experience and practical
            knowledge to advance your tech career. Join us to enhance your
            skills with guidance from industry experts.{" "}
          </p>
        </section>
      </div>
      <div className='contact-text1'>
            <h1>Leave us a Message</h1>
            <p>So our team can reach out to you on time</p>
      </div>
      <div className="contact-page2">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            className={formErrors.name ? 'error-input' : ''}
          />
          {formErrors.name && <p className="error-text">{formErrors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? 'error-input' : ''}
          />
          {formErrors.email && <p className="error-text">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Enter your Message'
            value={formData.message}
            onChange={handleChange}
            className={formErrors.message ? 'error-input' : ''}
          />
          {formErrors.message && <p className="error-text">{formErrors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>


      <div className="contacts">
        <section>
          <main>
            <img src={email} alt="email" />
          </main>
          <p>
            <a href="mailto:rajeswari.05052013@gmail.com" target="_blank" rel="noreferrer">rajeswari.05052013@gmail.com</a>
          </p>
        </section>
        <section>
          <main>
            <img src={phone} alt="Phone" />
          </main>
          <p>
            <a href="tel:9353225341" target="_blank" rel="noreferrer">+91 9353225341</a>
          </p>
        </section>
        <section>
          <main>
          <img src={whatsapp} alt="whatsapp" />
          </main>
          <p>
          <a href="https://wa.me/919353225341" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </p>
        </section>
      </div>
      </div>
    </div>

    {isSubmitted && <p className={toggle ? 'success-message':"success-message active"}>
    
  <div className='success-container'>
    <img src={ButtonIcon} alt="button-icon" onClick={()=>toggleChange()}/>
          <p>
            Thanks for reaching us <br />
            Our Team will contact soon
          </p>
          <p>For more updates follow us on <a href="www.techzoom.com" target='_blank' >techzoom.com</a></p>
      </div>
    
    
    </p>}
   </>
  );
};

export default Contact;
