import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import App22 from './picker1'
import { TypeAnimation } from 'react-type-animation';


export default function CouponProviders(){
    return (
        <Box sx={{padding:'40px',backgroundColor:"#1A9BF7",borderRadius:'20px',boxShadow: '10px 10px 25px 5px grey',}}>
           <Grid container spacing={2} justifyContent="center" >
           <Grid lg={4}>
             <Box sx={{
                paddingTop:'20px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'start',
                backgroundColor:"#1A9BF7",
                height:'100%'
             }}>
                <Grid>
                    <Grid lg={12}>
                        <Box sx={{width:'100%'}}>
                        <h1>COUPONS PROVIDERS</h1>
                        </Box>
                    </Grid>
                    <Grid lg={12}>
                    <TypeAnimation
      sequence={[
        `UBER\nCAREEM\nBATA\nKFC\nMcDonald's`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
        2000,
        '',
      ]}
 
      
      style={{ 
         fontSize: '40px',
      color: 'black',
      textAlign: 'start',

    
     whiteSpace: 'pre-line', height: '15px', display: 'block' }}
      repeat={Infinity}
    />
                    </Grid>
                </Grid>
             </Box>
            </Grid>
          
           <Grid lg={4}>
              <Grid lg={12}>
              <App22/>
              </Grid>
              <Grid lg={12}>
              <App22/>
              </Grid>
              <Grid lg={12}>
              <App22/>
              </Grid>

            </Grid>
            <Grid lg={4}>
              <Grid lg={12}>
              <App22/>
              </Grid>
              <Grid lg={12}>
              <App22/>
              </Grid>
              <Grid lg={12}>
              <App22/>
              </Grid>

            </Grid>
       
           </Grid>
        </Box>
    )}