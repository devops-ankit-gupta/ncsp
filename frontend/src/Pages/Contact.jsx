import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [yourName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // NEW

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleMobileNumberChange = (event) => setMobileNumber(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!yourName || !email || !mobileNumber || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true); // Button disabled & show loading
      const response = await axios.post('http://localhost:8080/api/Contact/add', {
        yourName,
        email,
        mobileNumber,
        message
      });
      console.log(response.data);
      toast.success('Thank you for your message!');
      // Reset fields
      setName('');
      setEmail('');
      setMobileNumber('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false); // Enable button again
    }
  };

  return (
    <section>
      {/* Top Banner */}
      <div className='pt-2 text-center mb-1 ps-0 pb-0'>
        <img src='/Assets/Images/ContactPage/banner.jpg' alt='banner-img' className='mw-100' />
      </div>

      {/* Main Content */}
      <section className='p-1 text-center mb-2 ps-5 pe-5'>
        <section className='text-center'>
          <div className='row'>

            {/* Our Mission */}
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Our Mission</h4>
              <p style={{ textAlign: "justify" }}>
                Our Mission is to provide a wide range of career-related services including job search, job matching, information on job fairs, services of local service providers like drivers, plumbers, etc., and various other services.
              </p>
            </div>

            {/* Get in Touch */}
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Get in Touch</h4>
              <table style={{ textAlign: "left" }}>
                <tbody>
                  <tr>
                    <td><div className='pe-3'><i className='fa-solid fa-phone fa-lg'></i></div></td>
                    <td>
                      <div>+91-7275526708 <br /> +91-9696689944</div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className='pe-3'><i className='fa-solid fa-location-dot fa-lg'></i></div></td>
                    <td>
                      <p className='pt-2'>
                        H. No. 968, Ankit Gupta, Trimohani Satti Road, Mirzapur, Pin-231001
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td><div className='pe-3'><i className='fa-solid fa-envelope-open-text fa-lg'></i></div></td>
                    <td>
                      <a href='mailto:devopsankitgupta@gmail.com'>devopsankitgupta@gmail.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Write to Us */}
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Write to Us</h4>

              <form onSubmit={handleSubmit}>
                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text'
                    value={yourName}
                    onChange={handleNameChange}
                  />
                  <label className='label'>Your Name</label>
                </div>

                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label className='label'>Email Id</label>
                </div>

                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text'
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                  />
                  <label className='label'>Mobile Number</label>
                </div>

                <div className='material-textfield mb-3'>
                  <textarea
                    className='input form-control'
                    placeholder=' '
                    value={message}
                    onChange={handleMessageChange}
                    rows='3'
                  ></textarea>
                  <label className='label'>Your Message</label>
                </div>

                <div className='d-grid gap-3'>
                  <button
                    className='btn btn-success rounded-pill'
                    type='submit'
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Image */}
            <div className='col-lg-3 col-md-6 mb-4'>
              <img
                src='./Assets/Images/ContactPage/write.jpg'
                height='340px'
                alt='write-us-img'
              />
            </div>

          </div>
        </section>
      </section>

      {/* Google Maps */}
      <div className='pb-2'>
        <iframe
          title='Location'
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d659.5820243773561!2d82.56327379903476!3d25.15040023018483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745828635381!5m2!1sen!2sin" 
          width='100%'
          height='350'
          style={{ border: "0" }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>

      {/* Toastify Container */}
      

    </section>
  );
};

export default Contact;
