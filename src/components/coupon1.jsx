import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Card = styled('div')({
  width: '350px',
  height: '100px',
  borderRadius: '5px',
  boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',
  padding: '10px',
  position: 'relative',
  display: 'flex',

  alignItems: 'center',

  
});

const Main = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 10px',
  alignItems: 'center',
});

const CoImg = styled('div')({
  position: 'absolute',
  left: '10%',
  '& img': {
    width: '70px',
    height: '70px',
  },
});

const Vertical = styled('div')({
  borderLeft: '2px dotted black',
  height: '100px',
  position: 'absolute',
  left: '40%',
});

const Content = styled('div')({
  position: 'absolute',
  right: '10%',
  '& h1': {
    fontSize: '18px',
    // marginLeft: '-20px',
    color: '#565656',
  },
  '& h1 span': {
    fontSize: '12px',
  },
  '& h2': {
    fontSize: '10px',
    // marginLeft: '-20px',
    color: '#565656',
    textTransform: 'uppercase',
  },
  '& p': {
    fontSize: '12px',
    color: '#696969',
    // marginLeft: '-20px',
  },
});







export default function CouponCard(props){


  return (
    
      <Card>
        <Main>
          <CoImg>
            <img 
              
              src={props.brandImg}
              alt=""
            />
          </CoImg>
          <Vertical />
          <Content>
            <h2>{props.name}</h2>
            <h1>
            {props.percent} <span>OFF</span>
            </h1>
            <p>Valid till {props.validity}</p>
          </Content>
        </Main>
       <Box sx={{
        height:"30px",
        width:"30px",
        backgroundColor: '#F5F5F5',
        borderRadius:"100%",
        position:'absolute',
        left:"-15px",
        top:"40%"
       }}>
       

       </Box>
       <Box sx={{
        height:"30px",
        width:"30px",
        backgroundColor: '#F5F5F5',
        borderRadius:"100%",
        position:'absolute',
        right:"-15px",
        top:"40%"
       }}></Box>
        <Box sx={{
        position:'absolute',
        right:"2%",
        top:"2%"
       }}>
      <Button sx={{
        paddingX:'20px',
        paddingY:'0px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'black',
        borderColor: 'black', // Set the border color here
        '&:hover': {
            backgroundColor: 'black', // Set the hover color here
            color: 'white',
            borderColor: 'black',
        },
    }} variant="outlined">Get</Button>
       </Box>
      </Card>

  );
};





