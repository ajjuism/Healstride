import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import heroImage from './images/hero-image.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import service1 from './images/service1.jpg';
import service2 from './images/service2.jpg';
import service3 from './images/service3.jpg';
import service4 from './images/service4.jpg';
import service5 from './images/service5.jpg';
import service6 from './images/service6.jpg';
import logo from './images/logo.png';

const LandingPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.',
    },
    // Add more testimonials as needed
  ];

  const goToPreviousTestimonial = () => {
    setActiveTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextTestimonial = () => {
    setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };


  return (
    <div className="landing-page">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Healstride Logo" />
          </div>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#hero" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="#contact" className="contact-btn" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Experience Personalized Physiotherapy at Home</h1>
              <p>Healstride offers top-quality home care physiotherapy services tailored to your specific needs. Our expert physiotherapists come to you, providing personalized treatment plans and guidance to help you recover, regain strength, and improve your overall well-being.</p>
              <a href="#contact" className="btn btn-primary">Book Your Appointment</a>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Healstride Physiotherapy" />
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-content">
            <h2>Services</h2>
            <div className="service-cards">
              <div className="service-card">
                <div className="service-card-image">
                  <img src={service1} alt="Service 1" />
                </div>
                <div className="service-card-content">
                  <h3>Physiotherapy for Orthopedic Conditions</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img src={service2} alt="Service 2" />
                </div>
                <div className="service-card-content">
                  <h3>Neurological Rehabilitation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img src={service3} alt="Service 3" />
                </div>
                <div className="service-card-content">
                  <h3>Geriatric Physiotherapy</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img src={service4} alt="Service 4" />
                </div>
                <div className="service-card-content">
                  <h3>Post-Operative Rehabilitation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img src={service5} alt="Service 5" />
                </div>
                <div className="service-card-content">
                  <h3>Sports Injury Rehabilitation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img src={service6} alt="Service 6" />
                </div>
                <div className="service-card-content">
                  <h3>Pediatric Physiotherapy</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci vel ipsum facilisis, vel malesuada velit tincidunt.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
        <div className="section-content">
          <h2>Testimonials</h2>
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item ${index === activeTestimonial ? 'active' : ''}`}
              >
                <p className="testimonial-content">{testimonial.content}</p>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="contact" id="contact">
          <div className="section-content">
            <h2>Get in Touch</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.classList.add('btn-loading');

                const formData = new FormData(form);
                const symptoms = formData.getAll('symptoms');
                formData.set('symptoms', symptoms.join(', '));

                const xhr = new XMLHttpRequest();
                xhr.open('POST','https://script.google.com/macros/s/AKfycbyS5DxODeYkQZe0GWYYsqGBGRS-sxbMOeTfcTXWp2-kmqA-hxWBxoI2l2HL7eZ9wmk/exec');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.status === 'success') {
                      // Display success popup
                      const successPopup = document.createElement('div');
                      successPopup.className = 'success-popup';
                      successPopup.innerHTML = `
                        <h3>Thank You!</h3>
                        <p>Your response has been received and we will connect with you shortly.</p>
                      `;
                      document.body.appendChild(successPopup);

                      // Reset form fields
                      form.reset();

                      // Remove success popup after 3 seconds
                      setTimeout(() => {
                        successPopup.remove();
                        submitButton.classList.remove('btn-loading');
                      }, 3000);
                    } else {
                      throw new Error(response.message);
                    }
                  } else {
                    throw new Error('Request failed. Status: ' + xhr.status);
                  }
                };
                xhr.onerror = function() {
                  console.error('Error:', xhr.statusText);
                  submitButton.classList.remove('btn-loading');
                  // Display an error message to the user
                  const errorPopup = document.createElement('div');
                  errorPopup.className = 'error-popup';
                  errorPopup.innerHTML = `
                    <h3>Oops!</h3>
                    <p>Something went wrong. Please try again later.</p>
                  `;
                  document.body.appendChild(errorPopup);
                  setTimeout(() => {
                    errorPopup.remove();
                  }, 3000);
                };
                xhr.send(new URLSearchParams(formData));
              }}
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <select name="location" required>
                <option value="">Select Location</option>
                <option value="Bellandur">Bellandur</option>
                <option value="HSR">HSR</option>
                <option value="Koramangala">Koramangala</option>
                <option value="Sarjapur">Sarjapur</option>
              </select>
              <select name="preferredSlot" required>
                <option value="">Select Preferred Slot</option>
                <option value="Forenoon">Forenoon</option>
                <option value="Afternoon">Afternoon</option>
              </select>
              <div className="symptoms-tags">
                <label>
                  <input type="checkbox" name="symptoms" value="Headache" />
                  Headache
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Joint Pain" />
                  Joint Pain
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Sprains and Strains" />
                  Sprains and Strains
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Shortness Of Breathe" />
                  Shortness Of Breathe
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Foot Pain" />
                  Foot Pain
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Muscle Stiffness" />
                  Muscle Stiffness
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Neck Pain" />
                  Neck Pain
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Tremors" />
                  Tremors
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Loss Of Balance" />
                  Loss Of Balance
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Knee Pain" />
                  Knee Pain
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Numbness and Tingling" />
                  Numbness and Tingling
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Inflammation" />
                  Inflammation
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Shoulder Pain" />
                  Shoulder Pain
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Cracking Joints" />
                  Cracking Joints
                </label>
                <label>
                  <input type="checkbox" name="symptoms" value="Back Pain" />
                  Back Pain
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
      </main>

      <section className="faq" id="faq">
        <div className="section-content">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className={`accordion-item ${activeAccordion === 0 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                <h3>Question 1</h3>
                <span className="accordion-icon"></span>
              </div>
              <div className="accordion-content">
                <p>Answer 1</p>
              </div>
            </div>
            <div className={`accordion-item ${activeAccordion === 1 ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                <h3>Question 2</h3>
                <span className="accordion-icon"></span>
              </div>
              <div className="accordion-content">
                <p>Answer 2</p>
              </div>
            </div>
            {/* Add more accordion items as needed */}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="Healstride Logo" />
            </div>
            <p>At Healstride, we are dedicated to providing exceptional physiotherapy services in the comfort of your home. Our team of experienced professionals is committed to helping you regain your strength, mobility, and overall well-being.</p>
          </div>
          <div className="footer-nav">
            <h3 className="footer-title">Navigation</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="#"><FaFacebook /></a>
              </li>
              <li>
                <a href="#"><FaTwitter /></a>
              </li>
              <li>
                <a href="#"><FaInstagram /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Healstride. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;