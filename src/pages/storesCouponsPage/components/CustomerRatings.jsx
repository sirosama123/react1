import React, { useEffect, useState, useRef } from 'react';
import '/dealsorb/src/pages/storesCouponsPage/stores.css'
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";

export default function CustomerRatings(){
    return(
        <div className='CustomerRatings'>
            <div className="couponMainHeadingOffer">
                Customers ratings for Noon in UAE
            </div>
            <div style={{ height: '10px' }}></div>
            <Rating  name="read-only" value={5}  onChange={(event, newValue) => {
    setValue(newValue);
  }} />
  <p>Average rating: 4.8 out of 5 stars by 625 users</p>

        </div>
    )
}