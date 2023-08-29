import React, { useEffect, useState, useRef } from 'react';
import '/dealsorb/src/pages/storesCouponsPage/stores.css'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(discount, couponCode, description, expire) {
    return { discount, couponCode, description, expire };
  }
  
  const rows = [
    createData('Cashback up to 50 AED OFF', 'ALCUAE','Noon Coupon Codes | 10% Cashback For New Users', 'Ongoing'),
    createData('5% Cashback (Up to 25 AED)', 'ALCNOON', 'Noon coupon code| 5% cashback for returning users', 'Ongoing'),
  ];

export default function PopularPromoCodes(){
    return(
       <div className='popularPromoCode'>
        
        <TableContainer sx={{padding:'15px'}} component={Paper}>
        <div className="couponMainHeading">
         Popular Noon Promo Codes & Sales
        </div>
        <div style={{height:'15px'}}></div>
            <Table aria-label="simple table">
                <TableHead sx={{ border: 'none'}}>
                    <TableRow>
                   
                    <TableCell sx={{color:'#434343',fontWeight:'750',fontSize:'14px'}} align="center">Discount</TableCell>
                    <TableCell sx={{color:'#434343',fontWeight:'750',fontSize:'14px'}} align="center">Coupon Code</TableCell>
                    <TableCell sx={{color:'#434343',fontWeight:'750',fontSize:'14px'}} align="center">Description</TableCell>
                    <TableCell sx={{color:'#434343',fontWeight:'750',fontSize:'14px'}} align="center">Expires</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                        key={row.discount}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                       
                        <TableCell align="center">{row.discount}</TableCell>
                        <TableCell align="center">{row.couponCode}</TableCell>
                        <TableCell align="center">
                        <a href={row.description} target="_blank" rel="noopener noreferrer">
                            {row.description}
                                </a>
                        </TableCell>
                        <TableCell align="center">{row.expire}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
         </TableContainer>
       </div>
    )
}