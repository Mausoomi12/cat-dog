
// // import React from 'react';

// // function Contact({ onClose }) {
// //   return (
// //     <div className="contact-form">
// //       <h2>Contact Us</h2>
// //       <form>
// //         <label htmlFor="name">Name:</label>
// //         <input type="text" id="name" name="name" placeholder='Enter your name here'
// //         style={{ height: '40px', borderRadius: '25px', }} />
// //         <label htmlFor="email">Email:</label>
// //         <input type="email" id="email" name="email" placeholder='Enter your e-mail address here'
// //         style={{ 
// //         height: '40px', 
// //         borderRadius: '25px', 
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center', 
// //         }}/>
// //         <label htmlFor="message">Message:</label>
// //         <textarea id="message" name="message" placeholder='Wanna share something with us'
// //         style={{ height: '40px', borderRadius: '25px', }}></textarea>
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contact;
// // Contact.js

// import React from 'react';

// function Contact({ onClose }) {
//   return (
//     <div className="popup-container">
//       <div className="popup-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Contact Us</h2>
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" />
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" />
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Enter your message"></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;
// Contact.js

import React from 'react';
import './ContactForm.css';

function Contact({ onClose }) {
  return (
    <div className="contact-overlay">
      <div className="contact-container">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>Contact</h1>
        <p>Lorem, ipsum dolor sit amet cuuntur </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name here"
          style={{ 
            height: '40px', 
            borderRadius: '25px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            }} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your e-mail address here"
          style={{ 
            height: '40px', 
            borderRadius: '25px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            }} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Wanna share something with us?"
          style={{ 
            height: '40px', 
            borderRadius: '25px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',  
            }}></textarea>
          <button type="submit">Submit</button>
          <p>Need more info? hello@newzera.com</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
