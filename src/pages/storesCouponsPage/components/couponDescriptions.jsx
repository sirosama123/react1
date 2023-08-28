import React, { useEffect, useState, useRef } from 'react';
import '/dealsorb/src/pages/storesCouponsPage/stores.css'
import Button from '@mui/material/Button';


export default function CouponDescriptionStores({offer,title, description,code}) {
    const [isDivVisible, setIsDivVisible] = useState(true);
    return(
        <div className='couponCardStorePageMain'>
           <div className="couponCardStorePage">
                <div className="section1">
                    <div className="couponsCardOffer">
                        {offer}
                    </div>
                    <div className="couponTag">
                        Coupon
                    </div>
                </div>
                <div className="section2">
                   <div className="couponMainHeading">
                        {title}
                   </div>
                   <div style={{height:'20px'}}></div>
                   <div className="section2B">
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                           <div style={{display:'flex'}}>
                           <div className="linkCouponCode">
                                <div className='circleStyle'>
                                    <div className='subcircleStyle'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/hotsale.png?alt=media&token=43dbc1ae-4083-44c8-b666-a8d29a8c25fd" height='40px' width='40px' alt="" srcset="" />
                                    </div> 
                                </div> 
                                    <h6>
                                        Hot Deal
                                    </h6> 
                            </div>
                            <div style={{width:'10px'}}></div>
                            <div className="linkCouponCode">
                                <div className='circleStyle'>
                                    <div className='subcircleStyle'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/like.png?alt=media&token=c9f5c5f1-e427-4018-8f5c-b75443a64953" height='40px' width='40px' alt="" srcset="" />
                                    </div> 
                                </div> 
                                <h6>
                                    Verified Coupon
                                </h6> 
                            </div>
                           </div>
                            <div className="couponCodeStorePageA">
                                <div className="couponCodeStorePage">
                                    <div className="codeSec2B">
                                        {code}
                                    </div>
                                    <Button
                                    onClick={() => setIsDivVisible(!isDivVisible)}
                                    sx={{height:'37px',width:'46px',border: '1px solid #AD0000',
                                    background:' #FFF', color: '#AD0000',
                                    fontsize: '11px',
                                    fontweight: '700',
                                    borderRadius:'0.5px'
                                    }}>Copy</Button>
                                    
                                </div>
                                <div style={{height:'5px'}}></div>
                                <p>
                                Copy the code above and paste at checkout.
                                </p>
                             
                            </div>
                        </div>
                      
                   </div>
                   <div style={{height:'20px'}}></div>
                   <div on className="lastSectionCouponPage">
                        <div style={{display:'flex'}}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/link.png?alt=media&token=947cc9b5-d8f7-4206-82dd-45a5b2c36efc" alt="" srcset="" />
                            <div style={{width:'5px'}}></div>
                            <div className="tab1">
                                    <h1>
                                        340
                                    </h1>  
                                    <h2>
                                            uses daily
                                    </h2> 
                                </div> 
                                <div style={{width:'5px'}}></div>
                                <div className="tab1">
                                    <h1>
                                        2 hours 
                                    </h1>  
                                    <h2>
                                            ago Last Used
                                    </h2> 
                                </div> 
                                <div style={{width:'5px'}}></div>
                                <div className="tab1">
                                    <h1>
                                        38.3 Dirmham
                                    </h1>  
                                    <h2>
                                            Last Saved
                                    </h2> 
                                </div>  
                        </div>
                        <div onClick={() => setIsDivVisible(!isDivVisible)} className="tab1">
                        {isDivVisible? <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/add.png?alt=media&token=c6a651b1-5c13-4012-8c6c-ab21cbb3bf75" alt="" />: <div><img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/minus.png?alt=media&token=13124ee7-6a2f-49bb-b574-8b4180b56fd3" alt="" srcset="" /></div>}
                        </div>           
                   </div>
                </div>
           </div>
           {!isDivVisible &&
           <div className="couponDescription">
                <div className="couponMainHeading">
                Activate the latest Noon coupon code 2023 and get Up to 50 Dirham Cashback On All Orders at Noon.com
                </div>
                <div style={{height:'10px'}}></div>
                <div className="descriptionSectionCoupon">
                {description}
                </div>
                <div style={{height:'10px'}}></div>
                <div className="couponAttributes">
                    <div className="attrbutes">
                        <h1>
                            Promo Code
                        </h1>
                        <h1>
                        Discount Value
                        </h1>
                        <h1>
                        Applicable For
                        </h1>
                         <h1>
                         Coupon Validity	
                         </h1>
                        
                    </div>
                    <div style={{width:'20px'}}></div>
                    <div className="values">
                    <h1>
                            Promo Code
                        </h1>
                        <h1>
                        Discount Value
                        </h1>
                        <h1>
                        Applicable For
                        </h1>
                         <h1>
                         Coupon Validity	
                         </h1>
                    </div>
                </div>
           </div>
           }
        </div>
    )
} 