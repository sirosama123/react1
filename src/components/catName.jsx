import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library


function CatName({ categoryHeading, productHeading }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <Box sx={{  }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
        <Box sx={{ borderRadius: '4px', height: { sm: '25px', md: '30px', lg: '40px' }, width: { sm: '14px', md: '18px', lg: '20px' }, backgroundColor: '#DB4444', mr: 2 }}>
        </Box>
        <Typography sx={{
          fontSize: {lg:'16px',md:'14px',sm:'12px',xs:'16px'},
          fontWeight: 'bold',
          color: '#DB4444'
        }}>
          {categoryHeading}
        </Typography>
      </Box>
      <div style={{ height: '7px' }}></div>
      <Typography sx={{
        fontSize: {lg:'36px',md:'32px',sm:'26px',xs:'22px'},
        fontWeight: 'bold',
        color: 'black'
      }}>
        {productHeading}
      </Typography>
    </Box>
  );
}

export default CatName;
