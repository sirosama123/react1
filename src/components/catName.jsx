import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CatName({ categoryHeading, productHeading }) {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ marginX: '18px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
        <Box sx={{ borderRadius: '4px', height: { sm: '25px', md: '30px', lg: '40px' }, width: { sm: '14px', md: '18px', lg: '20px' }, backgroundColor: '#DB4444', mr: 2 }}>
        </Box>
        <Typography sx={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#DB4444'
        }}>
          {categoryHeading}
        </Typography>
      </Box>
      <div style={{ height: '7px' }}></div>
      <Typography sx={{
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'black'
      }}>
        {productHeading}
      </Typography>
    </Box>
  );
}

export default CatName;
