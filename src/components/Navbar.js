// src/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import ContactForm from './ContactForm'; // Import the ContactForm component

function Navbar() {
  // State to manage the visibility of the contact form
  const [showContactForm, setShowContactForm] = useState(false);

  // Event handler to toggle the contact form visibility
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#careers">Careers</a></li>
        <li>
          <a href="#contact" onClick={toggleContactForm}>
            Contact
          </a>
        </li>
      </ul>

      {/* Render the ContactForm component if showContactForm is true */}
      {showContactForm && <ContactForm />}
    </nav>
  );
}

export default Navbar;