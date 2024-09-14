import React,{useState} from 'react'
import '../assets/css/Bookings.css'
import Logo from '../assets/img/TechZoomLogo.png'
import ButtonIcon from '../assets/img/Button-Icon.png'
import Footer from './Footer'

const Bookings = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        timeZone: '',
        time: '',
        date: ''
      });
    
      const [formErrors, setFormErrors] = useState({});
      const[toggle,setToggle]=useState(true)
      const [isSubmitted, setIsSubmitted] = useState(false);
    
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
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.timeZone) errors.timeZone = "Time zone is required";
        if (!formData.time) errors.time = "Time is required";
        if (!formData.date) errors.date = "Date is required";
    
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Handle successful form submission (e.g., send data to server)
          setIsSubmitted(true);
           // Disable scrolling when the success message is shown
           document.body.style.overflow = 'hidden';

          // Reset form fields
          setFormData({
            name: '',
            email: '',
            phone: '',
            timeZone: '',
            time: '',
            date: ''
          });
        }else{
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
    <div className='Booking-page'>
      <div className='booking-section1'>
        <img src={Logo} alt="logo" />
        <div>
            <h2>
            Reserve your slot now!
            </h2>
             <p> Take the first step toward a successful tech career.</p>
        </div>
      </div>

      <div className="booking-section2">
      <form onSubmit={handleSubmit} noValidate>
      <h1>Booking Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
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
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? 'error-input' : ''}
          />
          {formErrors.email && <p className="error-text">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <div className="phone-input">
            <select
              name="countryCode"
              value={formData.countryCode || '+1'} // Default to +1 (US)
              onChange={handleChange}
            >
              <option value="+1">+1 (US)</option>
              <option value="+91">+91 (India)</option>
              <option value="+44">+44 (UK)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={formErrors.phone ? 'error-input' : ''}
            />
          </div>
          {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="timeZone">Time Zone</label>
          <select
            id="timeZone"
            name="timeZone"
            value={formData.timeZone}
            onChange={handleChange}
            className={formErrors.timeZone ? 'error-input' : ''}
          >
            <option value="">Select your time zone</option>
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="US/Eastern">US/Eastern</option>
            <option value="US/Central">US/Central</option>
            <option value="US/Mountain">US/Mountain</option>
            <option value="US/Pacific">US/Pacific</option>
            {/* Add more time zones as needed */}
          </select>
          {formErrors.timeZone && <p className="error-text">{formErrors.timeZone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={formErrors.time ? 'error-input' : ''}
          />
          {formErrors.time && <p className="error-text">{formErrors.time}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={formErrors.date ? 'error-input' : ''}
          />
          {formErrors.date && <p className="error-text">{formErrors.date}</p>}
        </div>

        <button type="submit" className="submit-btn">Confirm Booking</button>
      </form>
      </div>

      <Footer/>
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
  )
}

export default Bookings
