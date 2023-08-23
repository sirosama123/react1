import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { FaFacebook, FaTwitter, FaYoutube , FaInstagram ,FaLinkedin,FaEnvelope} from 'react-icons/fa';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


export default function Footer() {
    const mainStyle0 = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    }
    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
    const iconstyling = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: '15px',
        fontWeight: 'semi-bold',
        color: 'white',
        textDecoration:'none',
        fontFamily:'poppins-light',
    }
    const footerLinks = {
        fontSize: '15px',
        fontWeight: 'semi-bold',
        color: 'white',
        textDecoration:'none',
        paddingY:'5px',
        fontFamily:'poppins-light',
        '&:hover':{
            color:'#4C9BF7'
        }
    }
    return (
        <Box sx={{
             position: 'relative',
            backgroundSize: 'cover',
            backgroundColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backgroundPosition: 'center',
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/footer.png?alt=media&token=43ae2f6a-0151-4a1b-af06-23b606756b84')`
        }}>
           <Box 
           sx={{
            backgroundColor: 'black',
            opacity: '0.85',
         
            display:'flex',
            flexDirection:'column',
            padding:'10px 20px 0px 20px'

        }}
           >
                <Box sx={{flexGrow:'10'}}>
                <Grid container>
                <Grid lg={1}>

                </Grid>
                <Grid sx={mainStyle0} lg={2.5} md={12}>
                    <Box
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        

                    >
                        <img src='https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/logo.png?alt=media&token=c1702995-c7d6-43cc-a9e7-632cc8717922' width={150} alt="" />
                    </Box>
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            fontSize: '15px',
                            fontWeight: 'normal',
                            color: 'white',
                            textDecoration:'none',
                            textAlign:'justify',
                            textJustify:'inter-word',
                            fontFamily:'poppins-light'
                        }}

                    >
                      Welcome to Dealsorb – Your one-stop destination for incredible deals and exclusive coupons. Discover a handpicked selection of the best discounts across various categories.

                    </Box>
                      
                </Grid>
                <Grid sx={mainStyle} lg={0.5}></Grid>
                <Grid sx={mainStyle} lg={2} md={3} xs={6} >
                    <Box   component="a"
                        href="/"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'white',
                            textDecoration:'none',
                            marginBottom:'20px',
                            marginTop:'20px'
                        }}>
                        Useful Links
                    </Box>
                   
                    <Box sx={{display: 'flex',
        flexDirection: 'column',
       
        }}>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        About Besa
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Sell on Besa
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Affiliate Programs
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Careers
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Terms & Conditions
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Privacy Policy
                    </Box>
                    </Box>
                    
                </Grid>
                <Grid sx={mainStyle} lg={2.5} md={3}>

                    <Box   component="a"
                        href="/"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'white',
                            textDecoration:'none',
                            marginBottom:'20px',
                            marginTop:'20px'
                        }}>
                        Help & Guide
                    </Box>
                   
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                  <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Help Center
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        How to Buy
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Shipping & Delivery
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        Product Policy
                    </Box>
                    <Box   component="a"
                        href="/"
                        sx={footerLinks}>
                        How to Return
                    </Box>
                  </Box>
                  
                     
                </Grid>
                <Grid sx={{marginTop:'20px'}} lg={2.5} md={3}>
               
                    <Box   component="a"
                        href="/"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: 'white',
                            textDecoration:'none',
                            
                        }}>
                        Newsletter
                    </Box>
                   
                <Grid sx={{marginTop:'20px'}} container >
                    <Grid lg={7.5}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',height:'30px'}}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter Your Mail"
                        />
                    </Paper>
                    </Grid>
                    <Grid lg={0.5}></Grid>
                    <Grid lg={4}>
                    <Button sx={{
                                
                                    height:'30px',
                                    fontSize: '8px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    borderColor: 'white',
                                    borderWidth:'2px',
                                    marginTop:{md:'10px'},
                                    marginBottom:{sm:'10px',xs:'10px'},
                                    marginLeft:{sm:'10px',xs:'10px'},
                                    '&:hover': {
                                        backgroundColor: '#DB4444', // Set the hover color here
                                        color: 'white',
                                        borderColor: '#DB4444',
                                        borderWidth:'2px',
                                    },
                                }} variant="outlined">Subscribe</Button>
                    </Grid>
                </Grid>

                </Grid>
               
                <Grid lg={1}>

                </Grid>
            </Grid>
                </Box>
                <Box sx={{flexGrow:'5',borderTop: '1px solid white',display:'flex' ,flexDirection:{lg:'row',md:'column',sm:'column',xs:'column'},alignItems:'center',justifyContent:'space-around'}}>
                    <Box sx={{flexGrow:'1'}}>
                     <Box sx={{display:'flex' ,alignItems:'center',justifyContent:'flex-start',  fontSize: '15px',
        fontWeight: 'semi-bold',
        color: 'white',
        textDecoration:'none',
        fontFamily:'poppins-light',
        marginLeft:'15px',
        marginTop:{md:'12px' ,sm:'20px',xs:'22px'}
        }}>
                     © 2022 Deals Orb. All Rights Reserved.
                     </Box>
                    </Box>
                    <Box sx={{flexGrow:'1'}}>
                    <Box sx={iconstyling}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginX:'5px',
                        marginY:{md:'12px' ,sm:'20px',xs:'22px'},
                        color: 'white', height: '40px', width: '40px', backgroundColor: "transparent", borderRadius: '50%', border: '2px solid white', '&:hover': {
                            color: 'blue'
                        },
                    }}>
                        <FaFacebook size={20} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginX:'5px',
                        color: 'white', height: '40px', width: '40px', backgroundColor: "transparent", borderRadius: '50%', border: '2px solid white', '&:hover': {
                            color: 'blue'
                        },
                    }}>
                        <FaInstagram size={20} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginX:'5px',
                        color: 'white', height: '40px', width: '40px', backgroundColor: "transparent", borderRadius: '50%', border: '2px solid white', '&:hover': {
                            color: 'blue'
                        },
                    }}>
                        <FaYoutube size={20} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginX:'5px',
                        color: 'white', height: '40px', width: '40px', backgroundColor: "transparent", borderRadius: '50%', border: '2px solid white', '&:hover': {
                            color: 'blue'
                        },
                    }}>
                        <FaTwitter size={20} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginX:'5px',
                        justifyContent: 'center',
                        color: 'white', height: '40px', width: '40px', backgroundColor: "transparent", borderRadius: '50%', border: '2px solid white', '&:hover': {
                            color: 'blue'
                        },
                    }}>
                        <FaLinkedin size={20} />
                    </Box>
                    
                    </Box>
                    </Box>
                    <Box sx={{flexGrow:'1'}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',marginBottom:{md:'12px' ,sm:'20px',xs:'22px'}}}>
                           
                          <Box sx={{marginRight:'10px'}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" height='40px' width='40px' alt="" srcset="" />
                          </Box>
                      
                     
                          <Box sx={{marginRight:'10px'}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" height='40px' width='40px' alt="" srcset="" />
                          </Box>
                      
                      
                          <Box sx={{marginRight:'10px'}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" height='40px' width='40px' alt="" srcset="" />
                          </Box>
                      
                     
                           <Box sx={{marginRight:'10px'}}>
                           <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" height='40px' width='40px' alt="" srcset="" />
                           </Box>
                       
                     
                           <Box sx={{}}>
                           <img src="https://cdn-icons-png.flaticon.com/128/5977/5977576.png" height='40px' width='40px' alt="" srcset="" />
                           </Box>
                      
               
               </Box>
                    </Box>
                </Box>
           </Box>
        </Box>

    )
}
