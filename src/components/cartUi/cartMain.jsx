import React, {useState, useRef,useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { toggleVisibility } from "../../stateManagement/slices/cartVisibilitySlice";
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "@mui/material/Typography";
import CartProductView from './cartProductView'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { getCartTotal, removeItem,
  decreaseItemQuantity,
  increaseItemQuantity, } from "../../stateManagement/slices/cartSlice";
import './cartMain.css'

function CartItems() {
  const dispatch = useDispatch();
    const isVisible = useSelector((state) => state.visibility);

    
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
      dispatch(toggleVisibility());
    };

    
    const { cart, totalQuantity, totalPrice } = useSelector(
      (state) => state.allCart
    );
  
 
  
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);


   
    return(
        <>
    <div>
        <div className={`cartt ${isVisible ? 'visible' : ''}`}>

        <div style={{width:'100%' ,height:'15%',backgroundColor:'white',display:'flex',flexDirection:'column',padding:'10px'}}>
            <Box onClick={handleButtonClick}>
                <CloseRounded/>
            </Box>
            <div style={{height:'15px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/carts.png?alt=media&token=8c63f282-75e2-4861-a2bd-614d21825946" height='45px' width='45px' alt="" srcset="" />
        <div style={{marginLeft:'10px'}}>
            <h1 style={{fontSize:'18px',fontWeight:'bold',color:'black'}}>
                Your Cart
            </h1>
            <h1 style={{fontSize:'18px',fontWeight:'normal',color:'black'}}>
               {cart.length} Item(s) in your cart.
            </h1>
           
        </div>
        </div>
        </div>
    <div style={{width:'100%' ,height:'65%',backgroundColor:'',overflowX: 'hidden', overflowY: 'scroll',borderTop:'1px solid grey',borderBottom:'1px solid grey'}}>
    <style>
    {`
      div::-webkit-scrollbar {
        width: 12px; /* Adjust the width as needed */
      }

      div::-webkit-scrollbar-thumb {
        background-color: #1A9BF7;
        border-radius:15px;
      }
    `}
  </style>
        {
          cart?.map((data)=>(
            <div className="cartItems">
            <div className="imgCartItem">
              <img src={data.imageurl} height="110px" width="110px" alt="" srcset="" />
            </div>
            <div className="contentCartItem">
                <h1>
                    {data.name}
                </h1>
                <h2>
                {data.quantity} x Rs.{data.price} = Rs.{data.quantity * data.price}
                </h2>
                <Box sx={{ display: 'flex', alignItems: 'center'  }}>
              <Box sx={{backgroundColor:"#DB4444", height: '30px', width: '30px', borderRadius: '5px 0px 0px 5px', borderLeft: '1px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '0px solid #DB4444',display: 'flex', justifyContent: 'center', alignItems: 'center' }}
               onClick={() =>
                dispatch(increaseItemQuantity(data.id))}>
                <AddIcon sx={{color:'white'}} />
              </Box>
             
              <Box sx={{ height: '30px', width: '30px', borderRadius: '0px', borderTop: '2px solid #DB4444',borderBottom:'2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'black',cursor:'pointer' }}>
                  {data.quantity}
                </Typography>

              </Box>
              
              {data.quantity>1?<Box sx={{ backgroundColor:"#DB4444", height: '30px', width: '30px', borderRadius: '0px 5px 5px 0px', borderLeft: '0px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '1px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
               onClick={() =>
                dispatch(decreaseItemQuantity(data.id))}>
                <RemoveIcon sx={{color:'white'}}  />
              </Box>:<Box sx={{ backgroundColor:"#DB4444", height: '30px', width: '30px', borderRadius: '0px 5px 5px 0px', borderLeft: '0px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '1px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
               onClick={() => dispatch(removeItem(data.id))}>
                <RemoveIcon sx={{color:'white'}}  />
              </Box>}
            </Box>
            </div>
        </div>
          ))
        }
        {/* <CartProductView/> 
        <CartProductView/> 
        <CartProductView/> 
        <CartProductView/>  */}
    </div>
 <div style={{width:'100%' ,height:'20%',display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
    <h1 style={{color:'black',fontSize:'18px',fontWeight:'600',textAlign:'start'}}>
        Sub Total : Rs.{totalPrice}
    </h1>
    <div style={{height:'10px'}}></div>
            
            <div style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <Button sx={{
            width:'170px',
            height:'35px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#FFF',
            border: '2px solid #DB4444',
            borderRadius:'5px',
            backgroundColor:"#DB4444",
            marginX:'5px',
            '&:hover': {
              backgroundColor: 'white', // Set the hover color here
              color: '#DB4444',
              border: '2px solid #DB4444',
            },
          }} variant="outlined">
         
            View Cart
            <div style={{width:'5px'}}></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/viewCart.png?alt=media&token=b196a479-e558-470b-8bba-6688bd5c4492" height='20px' width='20px' alt="" srcset="" />
            </Button>
    
            <div >
            <Button sx={{
            width:'170px',
            height:'35px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#FFF',
            border: '2px solid #DB4444',
            borderRadius:'5px',
            backgroundColor:"#DB4444",
            marginX:'5px',
            '&:hover': {
              backgroundColor: 'white', // Set the hover color here
              color: '#DB4444',
              border: '2px solid #DB4444',
            },
          }} variant="outlined">
         
            Checkout
            <div style={{width:'5px'}}></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/checkout.png?alt=media&token=6bdbc9d4-dff7-4e69-8f91-f85e81746aef" height='20px' width='20px' alt="" srcset="" />
            </Button>
            </div>


            
            </div>

            <div style={{height:'10px'}}></div>

            <Button sx={{
            width:'300px',
            height:'35px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#DB4444',
            border: '2px solid #FFF',
            borderRadius:'5px',
            backgroundColor:"#FFF",
            marginX:'5px',
            '&:hover': {
              backgroundColor: 'white', // Set the hover color here
              color: '#DB4444',
              border: '2px solid #FFF',
            },
          }} variant="outlined">
         
            Continue Shopping
            <div style={{width:'5px'}}></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/continueshopping.png?alt=media&token=7955ee54-0735-469a-9df5-7f192c119f26" height='20px' width='20px' alt="" srcset="" />
            </Button>
            </div>
 </div>
        
         
      
      </div>
      
      <style>
        {`
          .cartt {
            position: fixed;
            top: 0;
            right: ${isVisible ? '0' : '-400px'};
            height: 100%;
            width: 400px;
            background-color: #fff;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
            overflow-y: auto;
            z-index: 9999;
            transition: right 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
        </>
    )
}

export default CartItems;