import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '/dealsorb/src/assets/1.jpg'
import pic2 from '/dealsorb/src/assets/2.jpg'
import pic3 from '/dealsorb/src/assets/3.jpg'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
      <Carousel.Item>
        <div
        ><div style={{height:"600px",width:'100%'}}
        >
            <Box sx={{
                position:"absolute",
                right:"20%",
                left:"20%",
                top:"10%",
            }}>
            <Typography sx={{fontSize:'20px',color:'black' ,textAlign:'center'}}>
                You Can by 
            </Typography>
            </Box>
           <img height="600px" width='100%' src={pic1} alt="" /> 
        </div>
         
        </div>
     
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div
        ><div style={{height:"600px",width:'100%'}}
        >
           <img height="600px" width='100%' src={pic2} alt="" /> 
        </div>
        </div>
     
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div
        ><div style={{height:"600px",width:'100%'}}
        >
           <img height="600px" width='100%' src={pic3} alt="" /> 
        </div>
        </div>
     
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;