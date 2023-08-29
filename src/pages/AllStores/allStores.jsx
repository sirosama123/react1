import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import '/dealsorb/src/pages/couponsPage/index.css'
const couponsData = [
    {
        id: 1,
        name: "Noon",
        off:"10 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 2,
        name: "Noon",
        off:"20 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 3,
        name: "Noon",
        off:"30 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 2,
        name: "Noon",
        off:"20 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 3,
        cname: "Noon",
        off:"30 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
];
export default function AllStores() {
    return (
        <Grid container>
            <Grid items lg={1}>
            </Grid> 
            <Grid items lg={10}>
                <Grid container>
                    <Grid item lg={12}>
            <           Grid container spacing={4}  sx={{ marginX: '' }}>
                            {couponsData.map((item, index) => (
                                <Grid item key={index} xs={6} sm={3} md={2} lg={3}>
                                    <div className='mainShopCard'>
                                        <div className='shopCard'>
                                            <div className='brandLogo'>
                                                <img src={item.brandLogo} alt="" srcset="" />
                                             </div>
                                            <div className="offer">
                                                 <p>{item.off}</p>
                                            </div>
                                            <div className="shopLink">
                                                <p>{item.name}</p>
                                            </div>
                                         </div>
                                    </div>
        </Grid>
      ))}
    </Grid>
            </Grid>
          
        </Grid>
            </Grid> 
            <Grid items lg={1}>
            </Grid> 
        </Grid>
    )}