import React from 'react';
import banner from '../assets/banner.jpg'; // Update the path to the image file
import '/dealsorb/src/App.css'

const ImageBanner = () => {
    return (
      <div style={{ height: "100px" }}>
        <img src={banner} alt="Banner" height={'350px'} width={'100%'} />
      </div>
    );
  };
  
  export default ImageBanner;
  