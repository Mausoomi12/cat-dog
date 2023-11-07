import React, { useState } from 'react';
import './ImageSlider.css'; // Import the CSS file

const ImageSwitcher = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    
      <div className="right-half">
        <img
          src="dog1.png"
          alt="Image 1"
          style={{
            display: showFirstImage ? 'block' : 'none',
            cursor: 'pointer',
          }}
          onClick={toggleImage}
        />
        <img
          src="dog2.png"
          alt="Image 2"
          style={{
            display: showFirstImage ? 'none' : 'block',
            cursor: 'pointer',
          }}
          onClick={toggleImage}
        />
      </div>
  
  );
};

export default ImageSwitcher;
