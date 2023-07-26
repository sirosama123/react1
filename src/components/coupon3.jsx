import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const Card = styled('div')({
  width: '350px',
  height: '150px',
  borderRadius: '5px',
  boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',
  padding: '10px',
  position: 'relative',
});

const Main = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 10px',
  alignItems: 'center',
});

const CoImg = styled('div')({
  '& img': {
    width: '100px',
    height: '100px',
  },
});

const Vertical = styled('div')({
  borderLeft: '5px dotted black',
  height: '100px',
  position: 'absolute',
  left: '45%',
});

const Content = styled('div')({
  '& h1': {
    fontSize: '35px',
    // marginLeft: '-20px',
    color: '#565656',
  },
  '& h1 span': {
    fontSize: '18px',
  },
  '& h2': {
    fontSize: '18px',
    // marginLeft: '-20px',
    color: '#565656',
    textTransform: 'uppercase',
  },
  '& p': {
    fontSize: '16px',
    color: '#696969',
    // marginLeft: '-20px',
  },
});







export default function CouponCard3(){

  return (
    
      <Card>
        <Main>
          <CoImg>
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/mcdonalds-15-logo-png-transparent.png"
              alt=""
            />
          </CoImg>
          <Vertical />
          <Content>
            <h2>MacDonald's</h2>
            <h1>
            10% <span>Coupon</span>
            </h1>
            <p>Valid till 27th july 2023</p>
          </Content>
        </Main>
       <Box sx={{
        height:"30px",
        width:"30px",
        backgroundColor: '#dc143c',
        borderRadius:"100%",
        position:'absolute',
        left:"-15px",
        top:"42%"
       }}>

       </Box>
       
      </Card>

  );
};





