import axios from 'axios';
import React, { useState } from 'react';

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    msg: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       //!Backend se mila URL
      const response = await axios.post('https://portfolio-api-353q.onrender.com/api/addmsg', formData ,{
        headers: {
          'Access-Control-Allow-Origin': 'https://www.vivekkumar1011.me', //!
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      alert("message send successfully!")
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <>
  <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
      </div>

      <div className="row" data-aos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Maharajganj, Uttar Pradesh, India, 273302</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>sudhanshupatel0207@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+91 9336143193</p>
            </div>

          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form  className="php-email-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required value={formData.name} onChange={handleInputChange}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required value={formData.email} onChange={handleInputChange}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required value={formData.subject}  onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Message</label>
              <textarea className="form-control" name="msg"  rows="10" required value={formData.msg} onChange={handleInputChange}></textarea>
            </div>

            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>

    </>
  )
}
