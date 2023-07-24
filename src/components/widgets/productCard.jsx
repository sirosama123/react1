import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

export default function ProductCard1() {
    return (
        <Box
            sx={{
                height: '300px',
                width: '250px',
                borderRadius: '5px',
                backgroundColor: '#F5F5F5',
                position: 'relative',
            }}
        >  
            <Box
                sx={{
                    height: '220px',
                    width: '250px',
                    borderRadius: '5px',
                    backgroundColor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    flexDirection: 'column' // Clip the inner image to the container dimensions
                }}
            >
                <Box
                    sx={{
                        height: '220px',
                        width: '250px',
                        backgroundColor: 'blue',
                        position: 'relative',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage:
                            "url('https://i2-prod.mirror.co.uk/incoming/article22315296.ece/ALTERNATES/s615b/0_PlayStation-5-black-edition-concept.jpg')",
                        transition: 'transform 0.3s', // Add transition property for smooth zoom effect
                        '&:hover': {
                            transform: 'scale(1.1)', // Zoom in by 10% on hover
                            transformOrigin: 'center', // Keep the zoom centered within the box
                        },
                    }}
                >
                </Box>

            </Box>

            {/* <Button sx={{
                position: 'relative',
                paddingX: '20px',
                paddingY: '10px',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'transparent',
                border: '1px solid white',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '0',
                    backgroundColor: 'white', // Set the hover color here
                    transition: 'height 0.3s ease',
                    zIndex: -1,
                },
                '&:hover:before': {
                    height: '100%',
                },
                '&:hover': {
                    color: 'black', // Change text color on hover
                },
            }} variant="outlined">Shop Now</Button> */}
            
                <IconButton sx={{
                position: 'absolute',
                paddingX: '5px',
                paddingY: '5px',
                backgroundColor:'white',
                right:'20px',
                bottom:'22%',
                boxShadow: '0 4px 8px black',
                '&:hover': {
                    backgroundColor:'white',
                },
            }}>
      <FavoriteIcon />
    </IconButton>
    <Box sx={{
                position: 'absolute',
                paddingX: '5px',
                paddingY: '2px',
                backgroundColor:'white',
                left:'10px',
                top:'10px',
                boxShadow: '0 4px 8px black',
                // height:'20px',
                // width:'70px',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px black',
                borderRadius:'10px',
                '&:hover': {
                    backgroundColor:'white',
                },
            }}>
           <img height={'15px'}  width={'15px'} src="https://static.vecteezy.com/system/resources/previews/018/842/764/original/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png" alt="" srcset="" />
           <Box component="span">
           < Typography sx={{ fontSize: '12px', fontWeight: 'semi-bold', color: 'black' }}>(5.0)</Typography>
</Box>
           
    </Box>
    <Box sx={{
                position: 'absolute',
                paddingX: '10px',
                paddingY: '4px',
                backgroundColor:'white',
                right:'10px',
                top:'10px',
                boxShadow: '0 4px 8px black',
                // height:'20px',
                // width:'70px',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px black',
                borderRadius:'10px',
                '&:hover': {
                    backgroundColor:'white',
                },
            }}>
            <img height={'15px'}  width={'30px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" srcset="" />
         
           
    </Box>
   <Box sx={{}}>

   </Box>
            
        </Box>
      
    );
}
