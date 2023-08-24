import React, { useRef, useEffect } from 'react';
import '/dealsorb/src/pages/couponsPage/index.css'
import Grid from '@mui/material/Grid';

const couponsData = [
    {
        id: 1,
        code: "QW1234",
        off:"10 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 2,
        code: "HY6543",
        off:"20 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 3,
        code: "H7647U",
        off:"30 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 2,
        code: "HY6543",
        off:"20 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 3,
        code: "H7647U",
        off:"30 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        code: "KKJ123",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
];

export default function CouponCardDeal(){
    return (
        
        <Grid container>
            
            <Grid item lg={1}>
            
            </Grid>
            <Grid item lg={10}>
            <Grid container spacing={4}  sx={{ marginX: '' }}>
      {couponsData.map((item, index) => (
        <Grid item key={index} xs={6} sm={3} md={2} lg={1.5}>
           <div className='mainCardCoupon'>
            <div className='couponCard'>
                <div className='brandLogo'>
                   <img src={item.brandLogo} alt="" srcset="" />
                </div>
                <div className="off">
                    <p>{item.off}</p>
                </div>
                
                <div className="number">
                <div className="subNumber">
            </div>
                </div>
                <div className="mainNumber">
                {item.code}
                </div>
                <div className='right'></div>
                <div className='left'></div>
                <div className='dashedLine'></div>
            </div>
            
        </div>
        </Grid>
      ))}
    </Grid>
            </Grid>
            <Grid item lg={1}>

            </Grid>
        </Grid>
      
    )
}