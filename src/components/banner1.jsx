import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import headphone from '/dealsorb/src/assets/headphone.png';
import Typography from "@mui/material/Typography";
import '/dealsorb/src/App.css'



export default function Banner1(){

    const circleStyle = {
        width: {lg:'70px',md:'60px',sm:'50px',xs:'50px'},
        height: {lg:'70px',md:'60px',sm:'50px',xs:'50px'},
        borderRadius: '50%', // This creates the circular shape
        backgroundColor: {lg:'white',md:'white',sm:'white',xs:'white'}, // Example background color
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginX:{lg:'50px',md:'40px',sm:'30px',xs:'30px'},
        
      };


    
    return (
        <Box sx={{ backgroundImage: 'linear-gradient(to left,#2B2B2B, #040406)',
        //  backgroundColor: '#666666',
            Height:'400px',
            paddingX:'50px',
            borderRadius:'10px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            // paddingY:'30px',
            }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
        
        <Grid item lg={8} md={8} sm={12} xs={12} >
            <Box sx={{
                
            }}>
               <Typography sx={{color:"#00FF66",fontWeight:'bold',fontSize:{lg:'40px',md:'30px',sm:'25px',xs:'20px'}}}>
                Categories
                </Typography> 
                <Typography sx={{color:"white",fontWeight:'bold',fontSize:{lg:'55px',md:'50px',sm:'40px',xs:'35px'}}}>
                Enhance Your Music Experience With Dealsorb.
                </Typography> 
                <Box sx={{height:'20px'}}></Box>
                <Grid container spacing={1} >
                
                 <Grid item lg={1.5} md={2} xs={2}>
                    <Box sx={circleStyle}>
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                            23
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Hours
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid item lg={1.5} md={2} xs={2}>
                 <Box sx={circleStyle}>
                    
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                            23
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Hours
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid item lg={1.5} md={2} xs={2}>
                 <Box sx={circleStyle}>
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                            23
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Hours
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid item lg={1.5} md={2} xs={2}>
                 <Box sx={circleStyle} >
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                            23
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Hours
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid item lg={6} md={4} xs={4}>
                    
                 </Grid>
                 <Box sx={{height:'20px'}}></Box>
                <Button sx={{backgroundColor:'#00FF66', marginY:'20px'}}>
                <Typography sx={{fontWeight:'normal',fontSize:'15px',color:'white',paddingX:{lg:'30px',md:'40px',sm:'50px',xs:'55px'},paddingY:'10px'}}>
                            Buy Now!
                        </Typography>
                </Button>
                </Grid>
            </Box>  
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box sx={{padding:'20px'}}>
                <img id='headphoneImg' src={headphone} alt="" srcset="" />
            </Box>
        </Grid>

</Grid>
        </Box>

    )
}