import React from 'react';
import './Lorem.css'

const TextWithImages = () => {
  return (
    <div className="text-with-images">
      <div className="text-content">
      <h2>Lorem Ipsum is simply<br></br> dummy text of the printing <br/>and typesetting industry.</h2>
        <br></br><p>
        Lorem Ipsum has been the industry's standard dummy text <br/>ever since the 1500s, when an unknown printer took a galley of<br/> type and scrambled it to make a type specimen book.
        </p>
      
      </div>
      <div className="image-container">
        <img
          src="ap1.png"
          alt="Image 1"
          
        />
        <img
          src="gp.png"
          alt="Image 2"
        />
      </div>
      <div className='logo'>
        <img src='logo1.png'/>
      </div>
    </div>
  );
};

export default TextWithImages;
