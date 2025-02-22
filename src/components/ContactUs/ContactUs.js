import React from 'react';
import './ContactUs.css';
import { FaEnvelopeOpenText, FaFacebookMessenger, FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href='mailto:Parkashsingh7646@gmail.com' target='_blank' rel='noreferrer noopener'>
            <FaEnvelopeOpenText />
          </a>
          <a href='http://m.me/razelahmed.raz' target='_blank' rel='noreferrer noopener'>
            <FaFacebookMessenger />
          </a>
          <a href='http://wa.me/+91 79868 25346' target='_blank' rel='noreferrer noopener'>
            <FaWhatsapp />
          </a>
          <a 
            href='https://maps.app.goo.gl/3Qzh7p1AJgTgesUr7' 
            target='_blank' 
            rel='noreferrer noopener'
          >
            <FaMapMarkedAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
