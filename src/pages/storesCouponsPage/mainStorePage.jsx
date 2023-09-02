import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import './stores.css'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Mail from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { FaLocationArrow } from 'react-icons/fa';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CouponDescriptionStores from './components/couponDescriptions'
import MajorDiscountOffer from './components/majorDiscountOffer'
import PopularPromoCodes from './components/popularPromoCodes'
import ReviewsArticles from './components/reviewsArtcles'
import TopUsersComments from './components/topUserComments'
import CustomerRatings from './components/CustomerRatings'
import FAQS  from './components/faqs';
import SimilarStores from './components/similarStores';
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';

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
const couponData = [
    {
      offer:"Cashback up to 50 AED OFF",
      title: "Noon Coupon Codes 2023 | 10% Cashback For New Users",
      description: 'Enjoy discounts of 10% OFF up to a maximum cashback of 50 Dirham for new users, and 5% cashback up to a maximum of 10 Dirham for recurrent Noon UAE users.Noon discount code valid for purchases via the website or mobile app.This promo code is valid on all the following categories: Electronics, Mobiles and Tablets, Baby products, toys, perfumes, clothes and fashion...Terms and conditions apply',
      code:'ALCUAE'
    },
    {
      offer:"5% Cashback (Up to 25 AED)",
      title: "5% OFF Noon coupon code 2023 for returning users | Up to 25 AED Cashback",
      description: 'Enjoy discounts of 10% OFF up to a maximum cashback of 50 Dirham for new users, and 5% cashback up to a maximum of 10 Dirham for recurrent Noon UAE users.Noon discount code valid for purchases via the website or mobile app.This promo code is valid on all the following categories: Electronics, Mobiles and Tablets, Baby products, toys, perfumes, clothes and fashion...Terms and conditions apply',
      code:'ALCNOON'
    },
    {
        offer:"5% Cashback (Up to 25 AED)",
        title: "Noon Coupon Codes 2023 | 10% Cashback For New Users",
        description: 'Enjoy discounts of 10% OFF up to a maximum cashback of 50 Dirham for new users, and 5% cashback up to a maximum of 10 Dirham for recurrent Noon UAE users.Noon discount code valid for purchases via the website or mobile app.This promo code is valid on all the following categories: Electronics, Mobiles and Tablets, Baby products, toys, perfumes, clothes and fashion...Terms and conditions apply',
        code:'ALCUAE'
      },
      {
        offer:"5% Cashback (Up to 25 AED)",
        title: "5% OFF Noon coupon code 2023 for returning users | Up to 25 AED Cashback",
        code:'ALCNOON'
      },
  ];
export default function MainStorePage() {
    return (
        <Grid container >
            <Grid item lg={12}>
            <ResponsiveAppBar activePage={'All Stores'} />
            </Grid>
            <Grid item lg={1}>

            </Grid>
            <Grid item lg={10} >
                <div className="banner"></div>
                <Grid container>
                    <Grid lg={8}>
                        <div>
                        <div style={{ height: '15px' }}></div>
                            <div className="storeNameHeading">
                                Noon UAE store's Coupons and Promo Codes
                            </div>
                            <div style={{ height: '15px' }}></div>
                            <div>
                            {couponData.map((coupon, index) => (
                                <>
                               <div style={{height:'10px'}}> </div>
                                <CouponDescriptionStores
                                offer={coupon.offer}
                                title={coupon.title}
                                description={coupon.description}
                                code={coupon.code}
                                />
                                <div style={{height:'10px'}}> </div>
                                </>
                            ))}
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <MajorDiscountOffer/>
                            <div style={{ height: '30px' }}></div>
                            <PopularPromoCodes/>
                            <div style={{ height: '30px' }}></div>
                            <ReviewsArticles/>
                            <div style={{ height: '30px' }}></div>
                            <TopUsersComments/>
                            <div style={{ height: '30px' }}></div>
                            <CustomerRatings/>
                            <div style={{ height: '30px' }}></div>
                            <div className="couponMainHeadingOffer">
                            FAQ about Noon coupon, sale and discounts
                            </div>
                            <div style={{ height: '15px' }}></div>
                            <FAQS/>
                            <div style={{ height: '30px' }}></div>
                            <div className="couponMainHeadingOffer">
                            Similar Stores to Noon in UAE
                            </div>
                            <div style={{ height: '15px' }}></div>
                            <SimilarStores/>

                        </div>
                    </Grid>
                    <Grid lg={4} sx={{}}>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'end',
                            justifyContent:'center'
                        }}>
                            <div className="shopNow">
                                <div style={{ height: '30px' }}></div>
                                <img src="https://www.businesslist.pk/img/pk/b/1653645324-40-dekhlo-pk.jpg" height='70px' width='70px' alt="" srcset="" />
                                <div style={{ height: '20px' }}></div>
                                <div className="offer">
                                    5% - 10% Exclusive Coupon
                                </div>
                                <div style={{ height: '20px' }}></div>
                                <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: '#DB4444', paddingX: '50px' }}>Shop Now</Button>
                                <div style={{ height: '30px' }}></div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="contact">
                                <div className="boldHeadings">
                                    Receive exclusive offers to your mailbox
                                </div>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
                                >
                                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                                        <Mail />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Email"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>
                                <div className="boldHeadings">
                                    Or Through SMS Message
                                </div>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
                                >
                                   
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Email"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <Button type="button" sx={{ p: '10px' ,backgroundColor:'red' }} aria-label="search">
                                    <FaLocationArrow />
                                    </Button>
                                </Paper>
                                <div style={{ height: '30px' }}></div>
                                <div style={{width:'274px'}}>
                                <div className="smallDescription">
                                Enter your email address or mobile number to receive
                                new exclusive deals as soon as we have them!
                                </div>
                                </div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="aboutShoppingStore">
                                <div className="normalMainHeading">
                                 About FirstCry UAE online shopping app and store
                                </div>
                                <div style={{ height: '15px' }}></div>
                                <div className="normalParagraph">
                                    Since its opening in 2010, FirstCry has been growing and developing by offering various kids and maternity products from the top international brands to all families worldwide. FirstCry online store started offering its services in UAE in 2019, and has gained the trust of families due to the wide variety of products at affordable prices and fast shipping. So FirstCry became the first choice for mothers in UAE thanks to the outstanding & professional services of the online store.
                                    The customer can choose what he is looking for his child from 2 million unique products, which are not available in other stores. You can start browsing through various categories including boys' and girls Fashion for all ages, kids footwear, toys, stationery, diapers, baby strollers, outdoor games such as trampolines & bicycles, in addition to baby feeding, bath & skincare, beds & baby room decor, and party items such as invitation cards and many more.
                                    You can benefit from the latest FirstCry discount codes and offers when online shopping by activating the latest FirstCry coupon code 2023 valid on sale & full-priced products, found exclusively at Al Coupon. In addition to fast shipping to Abu Dhabi, Dubai,Sharjah, Al Ain, Ras al Khaimah...etc and excellent customer service.
                                    FirstCry online shopping store | Top FirstCry coupon codes
                                    FirstCry UAE online shopping store offers you quality baby and maternity products at competitive prices. Activate FirstCry discount codes & coupons 2023:
                                </div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="topStores">
                                <div className="headerTopStores">
                                    <div className="normalMainHeading">
                                       Top Stores
                                    </div>
                                    <div className="seeAll">
                                        See all
                                    </div>
                                </div>
                                <div className="namesTopStores">
                                            <Grid container>
                                                <Grid item lg={12}>
                                                    <Grid container sx={{ marginX: '' }}>
                                                        {couponsData.map((item, index) => (
                                                        <Grid item key={index} xs={4} sm={4} md={4} lg={4}>
                                                        <div className='storeLogo'>
                                                          <img src={item.brandLogo} alt="" srcset="" />
                                                        </div>
                                                        </Grid>
                                                    ))}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                </div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="couponImageType">
                                    <div className="couponImageTypeSub">
                                     <div className="small">
                                        
                                        <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dke6pt7l5f3jihkmhjzm" alt="" srcset="" />
                                        <div style={{ height: '15px' }}></div>
                                        <p>
                                        Coupon Code
                                        </p>
                                        <div className="couponCode">
                                            A4152F
                                        </div>
                                        <h6>
                                        Copy the Above Code and Paste at Checkout
                                      </h6>
                                      <h5>
                                        Upto 80% Off + Extra 10%
                                      </h5>
                                      <p>
                                        Ali Express
                                    </p>
                                     <div className="lastSection">
                                        <div className="first">

                                        </div>
                                        <div className="second">
                                            <img className='logoImg'  src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/logo.png?alt=media&token=c1702995-c7d6-43cc-a9e7-632cc8717922" alt="" srcset="" />
                                            <img className='flagImg'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png" alt="" srcset="" />
                                        </div>
                                     </div>
                                     </div>
                                    </div>       
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="storeFeatures">
                                    <div className="normalMainHeading">
                                       Store Features
                                    </div>  
                                    <div style={{ height: '15px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/support.png?alt=media&token=115d560d-5f29-442c-b364-5d5d7ead71aa" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                                Customer Support 24/7
                                                </h1> 
                                        </div>
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/security.png?alt=media&token=2c39d2c9-ba6d-49e0-aa17-0f68410a8587" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Extended warranty
                                                </h1> 
                                        </div>  
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/return.png?alt=media&token=cf1bc8d9-e441-4986-9bd9-caae348411ca" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Free Returns
                                                </h1> 
                                        </div>  
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="storeFeatures">
                                    <div className="normalMainHeading">
                                       Shipping Methods
                                    </div>  
                                    <div style={{ height: '15px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/shop.png?alt=media&token=f4e78a33-ea7d-45ff-8b2e-e1353bfd5ba0" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                                In-Store Pickups
                                                </h1> 
                                        </div>
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/icon-delivery.png?alt=media&token=ed1f5eaa-212c-41d8-be3c-d6717e8e3ac4" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Same Day Delivery
                                                </h1> 
                                        </div>  
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/icon-delivery.png?alt=media&token=ed1f5eaa-212c-41d8-be3c-d6717e8e3ac4" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Standard shipping
                                                </h1> 
                                        </div>  
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="storeFeatures">
                                    <div className="normalMainHeading">
                                       Payment Methods
                                    </div>  
                                    <div style={{ height: '15px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/cash-on-delivery.png?alt=media&token=9367e391-5522-441a-94ad-35ceee5d452b" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                                Cash on Delivery
                                                </h1> 
                                        </div>
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/credit-card.png?alt=media&token=08e6fe25-2b8b-4093-ba4b-318f2ef39777" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Credit Card
                                                </h1> 
                                        </div> 
                                        <div style={{ height: '10px' }}></div> 
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/pay.png?alt=media&token=abdbdc72-da9c-4697-804c-ce9eba3dd35b" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Paypal
                                                </h1> 
                                        </div>  
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="aboutShoppingStore">
                                    <div className="normalMainHeading">
                                    Enjoy Free Shipping from Noon UAE
                                    </div>
                                    <div style={{ height: '15px' }}></div>
                                    <div className="normalParagraph">
                                    Noon offers you free shipping if the value of your order is equal to or more than 100 AED or 200 SAR or 250 EGP. Noon’s free shipping includes all governorates and cities in the UAE. Including: Abu Dhabi, Dubai,Sharjah, Al Ain, Ras al Khaimah...etc, just to name a few...
                                    Savvy shoppers know that when online shopping, you never have to pay full price for anything. Al Coupon is the biggest coupon website in UAE, which is why we've collected Noon discounts, deals and coupon codes shown here...
                                    </div>
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="aboutShoppingStore">
                                    <div className="normalMainHeading">
                                    Take advantage of Noon’s return, exchange and refund policy
                                    </div>
                                    <div style={{ height: '15px' }}></div>
                                    <div className="normalParagraph">
                                    If you're not 100% satisfied with your purchase, Noon accepts returns and refunds. You can return products if you have received wrong items, damaged products or even having changed your mind.
                                    In the case of receiving damaged or the wrong product, do not use the product and keep it in the original packaging. Make sure items received are not used, don’t remove their labels and tags, otherwise the return won’t be accepted.
                                    </div>
                                </div>
                                <div style={{ height: '30px' }}></div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={1}>

            </Grid>
            <Grid item lg={12}>
            <Footer />
            </Grid>
        </Grid>
    )
} 