import { useState } from 'react'
import '/dealsorb/src/App.css'
import ResponsiveAppBar from '/dealsorb/src/components/bar2'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryDesign2 from '/dealsorb/src/components/Product'
import { productData, responsive } from "/dealsorb/src/components/data";
import { productData2, responsive2 } from "/dealsorb/src/components/trendyProductData";
import { discountProdcts, discountProdctsResponsive } from "/dealsorb/src/components/productData2";
import CatName from '/dealsorb/src/components/catName'
import BasicGrid from '/dealsorb/src/components/grid1'
import ProductCard1 from '/dealsorb/src/components/widgets/productCard'
import Box from '@mui/material/Box';
import CouponGrid from "/dealsorb/src/components/couponGrid"
import CouponProviders from '/dealsorb/src/components/couponProviders'
import ControlledCarousel from '/dealsorb/src/components/carousel1'
import { Link, Element } from 'react-scroll';
import Heading1 from '/dealsorb/src/components/subComponents/heading1';
import Banner1 from '/dealsorb/src/components/banner1';
import Grid from '@mui/material/Grid';
import ClearanceList from '/dealsorb/src/components/clearanceScen';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import DiscountCard1 from "/dealsorb/src/components/discountCard"
import Benefits from '/dealsorb/src/components/benefits'
import Footer from '/dealsorb/src/components/footer'
import ImageSwitcher from '/dealsorb/src/pages/productDetails'
import { Provider } from 'react-redux';
import store from '/dealsorb/src/stateManagement/store';
import Tabs from './components/ladingPage'
import CouponCardDeal from './components/dealCards'
import ProviderShops from './components/providersShop'
import SliderCouponMain from './components/mainSliderCouponPage'
import Option2 from './components/storeSliderOption'

export default function MainCouponLandingPage() {
    const [count, setCount] = useState(0)
  const product = productData.map((item) => (
    <CategoryDesign2
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  const colorList = ['#FF5733', '#33FFA6', '#3366FF', '#FF33E9'];
  const variations = ['xs', 'sm', 'md', 'lg', 'xl'];
  const images = [
    "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
    "https://images.unsplash.com/photo-1557245526-45dc0f1a8745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
    "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
  ];
  const brands=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcun-kQRcEJfhW4gEZYXuoDWzrqSjAfsPU8EPJBopzpbDgngdQEUNUgYshnWebXlxt_dc&usqp=CAU",
    "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dke6pt7l5f3jihkmhjzm",
    "https://cdn.vox-cdn.com/thumbor/J5qg1LLvKq1DGwrfbahJcnI7-vU=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19218416/acastro_190920_1777_amazon_0002.0.jpg",
    "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wko3ka42ewzfyanrvm9h",
    "https://a.namshicdn.com/cms/Logos/namshi_square.jpg",
    "https://savyour-prod.s3-ap-south-1.amazonaws.com/brands/2806/1687007931.png",
    "https://www.businesslist.pk/img/pk/b/1653645324-40-dekhlo-pk.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOvTAMvoMWZejLewsVKr0arfX9Ama-q6hbOHIZ_QBXQ87sm0UfuCL70ejShVVsF97Iyg&usqp=CAU"

  ]
  const saleBanners = [
    "https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=1380&t=st=1693021570~exp=1693022170~hmac=15fbcfcb5cb810fb70e00bdcb5faadb7bf07ab815b91ac15f536909abcf07b99",
    "https://img.freepik.com/free-psd/fashion-super-sale-banner-template_23-2148997357.jpg?w=1380&t=st=1693021635~exp=1693022235~hmac=011a6d80eeccfeafe9525e04ad002fe111e36364381c745da72a1ec4df1575aa",
    "https://img.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg?w=1380&t=st=1693021706~exp=1693022306~hmac=245ac710be90bd05b9c0bca7c38c8a1ae1e78bfb98f47877363c44881c143c4e",
    "https://img.freepik.com/free-photo/arrangement-black-friday-clock-with-copy-space_23-2148665530.jpg?w=1380&t=st=1693021730~exp=1693022330~hmac=d8be7fe228a02f04ee3b7e082122e96e514e8d14c23b0b0369e6ff4a49477893",
    "https://img.freepik.com/free-vector/modern-promotional-sales-banner-design_1017-9787.jpg?2&w=1060&t=st=1693021763~exp=1693022363~hmac=20877ff9e86694692b1a4cc1b4cbe090f39f0041c25851f1e5e4c5de2bb3417c",
    "https://img.freepik.com/free-vector/deal-promotional-banner-hanging-price-tag-style_1017-27325.jpg?w=1060&t=st=1693021786~exp=1693022386~hmac=6a40ee3173925f9e3de54fe29d2f3d5cf378c5b928c4b20bbda0ec86f72493f8"
  ]
  const initialBigImageSrc = images[0];
  const product22 = productData2.map((item) => (
    <ProductCard1
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      rating={item.rating}
      brandLogo={item.brandLogo}
    />
  ));
  const product23 = discountProdcts.map((item) => (
    <DiscountCard1
      name={item.name}
      url={item.imageurl}
      // price={item.price}
      // description={item.description}
      rating={item.rating}
      discount={item.discount}
    />
  ));
    return(
        <>
        
<ResponsiveAppBar activePage={'Deals & Coupons'} />
<Grid container sx={{
   backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/banner1.jpg?alt=media&token=e3b1b3ba-799b-4c46-88c5-27d037ffcb68')`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center' , 
   height: '400px',
   display:'flex',
   alignItems:'center',
   justifyContent:'space-evenly'
}}>
  <Grid item lg={8} md={12} sm={12} xs={12}  sx={{ display:'block'}}>
  <SliderCouponMain images={saleBanners}/>
  </Grid>
  <Grid item lg={4} sx={{md:{display:'none'}}}  >
  <Option2 images={brands} />
  </Grid>
</Grid>
<div style={{height:'30px'}}></div>
<Grid container>
  <Grid item lg={1}></Grid>
  <Grid item lg={10}>
  <CatName categoryHeading="Coupons" productHeading="Popular Coupons"/>
  </Grid>
  <Grid item lg={1}></Grid>
</Grid>
<div style={{height:'20px'}}></div>
<CouponCardDeal/>
<div style={{height:'30px'}}></div>
<Grid container>
  <Grid item lg={1}>

  </Grid>
  <Grid item lg={10}>
    <div className='couponPageContent'>
        <h1>
        Coupons and Discount Codes in UAE
        </h1>
        <p>
        Al Coupon is the best renowned Arab coupons’ website, collecting hundreds of coupon codes and voucher coupons, in addition to offers and discounts valid for 2023. The website also assists you in learning how to use and apply coupons or promo codes, to save money while shopping online through any e-commerce website. All in just one place!
        </p>
        <p>
        Our goal at Al Coupon is to help you find the newest and latest coupon codes, promotional vouchers and discount codes, valid and tested for hundreds of local and international online stores that ship to Abu Dhabi, Dubai,Sharjah, Al Ain, Ras al Khaimah...etc. Our team is working hard to check and update every coupon on a daily basis to help you save more on your purchases from your favorite shopping sites.
        </p>
    </div>
  </Grid>
  <Grid item lg={1}>

  </Grid>
</Grid>
<div style={{height:'30px'}}></div>
<Grid container>
  <Grid item lg={1}></Grid>
  <Grid item lg={10}>
  <CatName categoryHeading="Stores" productHeading="Popular Stores"/>
  </Grid>
  <Grid item lg={1}></Grid>
</Grid>
<div style={{height:'20px'}}></div>
<ProviderShops/>
<div style={{height:'30px'}}></div>
<Grid container>
  <Grid item lg={1} md={1} sm={1} xs={0}>

  </Grid>
  <Grid item lg={10} md={10} sm={10} xs={12}>
    <div className='couponPageContent'>
        <h1>
        Oman Discounts, Coupons & Promo Codes July 2023
        </h1>
        <Grid container>
          <Grid item lg={3} xs={6} sx={{marginTop:{xs:'10px'}}}>
             <div>
              <h2>
                  Online Store
              </h2>
              <h4>
              FirstCry 
              </h4>
              <h4>
              Farfetch  
              </h4>
              <h4>
              Namshi 
              </h4>
              <h4>
              Ounass 
              </h4>
              <h4>
              iHerb  
              </h4>
              <h4>
              6th Street 
              </h4>
              <h4>
              Level Shoes
              </h4>
             </div>
          </Grid>
          <Grid item lg={3} xs={6} sx={{marginTop:{xs:'10px'}}}>
             <div>
              <h2>
                  Coupone Code
              </h2>
              <h6>
              CX122  
              </h6>
              <h6>
              RXKJ2Q  
              </h6>
              <h6>
              ALC1 
              </h6>
              <h6>
              H13 
              </h6>
              <h6>
              IMA1115  
              </h6>
              <h6>
              CX1 
              </h6>
              <h6>
              LA9
              </h6>
             </div>
          </Grid>
          <Grid item lg={6} sx={{marginTop:{xs:'10px'}}}>
             <div>
              <h2>
                  Discount Details
              </h2>
              <h4>
              FirstCry coupon code | 10% OFF Sitewide
              </h4>
              <h4>
              New Users Farfetch promo code | 10% OFF
              </h4>
              <h4>
              Namshi promo code | 5% Discounted Items  
              </h4>
              <h4>
              10% Ounass Discount Code + Sale up to 50% 
              </h4>
              <h4>
              Iherb Offers | Up to 20% OFF  
              </h4>
              <h4>
              6th Street 
              </h4>
              <h4>
              Level Shoes
              </h4>
             </div>
          </Grid>
        </Grid>
    </div>
  </Grid>
  <Grid item lg={1} md={1} sm={1} xs={0}>

  </Grid>
</Grid>

<div style={{height:'30px'}}></div>

<Grid container>
  <Grid item lg={1} md={1} sm={1} xs={0}>

  </Grid>
  <Grid item lg={10} md={10} sm={10} xs={12}>
    <Grid container spacing = {4}>
      <Grid  item lg={6}>
     <div className="couponPageContent">
     <div className='imgSectionplusContent'>
        <h2>
                    Everything you need to know about using online coupon codes & discounts in 2023
        </h2>
        <p>
        A promo code can provide you with instant discounts in the form of percentages of the total order, for example 10% off the total cost of purchase, or fixed value reductions such as a 10 Omani Rial discount on purchases worth 100 Omani Rial, or free shipping. However, finding active discount codes successfully can be difficult in some cases. For this reason, Al Coupon’s team checks every voucher code and their expiry dates everyday.
        </p>
        <p>
        You probably have noticed while shopping on the internet the “Coupon Code” box that appears before checking out. A few online shops known for continuously providing promo codes are: Shein, Noon.com and Ounass.
        </p>
        <p>
        If finding the best coupon while shopping from online stores and applying it is difficult for you, there is no need to worry; we will open the doors of knowledge for you and offer you all the advice you may need to transform from a beginner to an expert in using coupons and saving while shopping through the internet.
        </p>
    </div>
     </div>
      </Grid>
      <Grid  item lg={6}>
      <div className='couponPageContent'>
        <div className='imgSectionplusContent'>
          <div className="imgContent">

          </div>
          <div>
          <h2>
          How to find the right promo code:
        </h2>
        <p>First, you will need to search and get a coupon code or discount voucher and learn how to apply it. All you have to do, is open Al Coupon’s website Oman to search for a recent and valid discount coupon for the store you wish to shop from and start saving now. The coupons could discount a certain percentage or amount in Omani Rial off of your total, or change your shipping expenses either by removing or reducing them.</p>
        <p>The offers could be applied site-wide, or could be valid on certain products or categories only. In some cases, the coupons require that your total exceeds a certain limit, so you should check the terms and conditions regularly as they differ from one store to another.</p>
          </div>
        </div>
    </div>
      </Grid>
    </Grid>
   
  </Grid>
  
  <Grid item lg={1} md={1} sm={1} xs={0}>

  </Grid>
</Grid>
<div style={{height:'30px'}}></div>
<Grid container>
  <Grid item lg={1}>

  </Grid>
  <Grid item lg={10}>
    <div className='couponPageContent'>
        <h1>
        How To Use Promotional Coupons?
        </h1>
        <p>
        After finding the suitable discount coupon, you will find the following details: the discount value (as a percentage or a fixed amount in Omani Rial), expiry date of the coupon/offer, any terms and conditions, and the discount code. To reveal the promo code, simply click on "Reveal Coupon" which will direct you to the shopping site in a new window and reveal the code.
        </p>
      
    </div>
  </Grid>
  <Grid item lg={1}>

  </Grid>
</Grid>
<div style={{height:'30px'}}></div>
<Grid container>
  <Grid item lg={1} md={1} sm={1} xs={0}>

  </Grid>
  <Grid item lg={10} md={10} sm={10} xs={12}>
    <Grid container spacing = {4}>
      <Grid  item lg={4} md={6} sm={6}>
        <div className="lastInstructions">
           <div className="lastInstructionsImg1">
              
           </div>
           <div className='couponPageContent'>
           <h2>
        How To Use Promotional Coupons?
        </h2>
        <div style={{height:'10px'}}></div>
        <p>We recommend that all online shoppers from Oman check this guide out before checking out to have a smooth shopping experience. Make sure you write or paste the voucher code correctly. Most codes have capital English letters and at times are case-sensitive, thus they may not be valid if entered as small letters. If you copy the discount code provided on our website and paste it, check that there are no empty spaces before or after the code, otherwise an error message could appear.</p>
           </div>
        </div>
      </Grid>
      <Grid  item lg={4} md={6} sm={6}> 
      <div className="lastInstructions">
      <div className="lastInstructionsImg2">
              
              </div>
      <div className='couponPageContent'>
      <h2>
      How to apply the voucher code?
        </h2>
        <div style={{height:'10px'}}></div>
        <p>After finding and copying a coupon code, finish shopping and adding products to your shopping cart, paste the code in the correct field and apply it to reveal your total after the discount. After that you are ready to proceed to pay in your local currency (Omani Rial) and place your order to be shipped to all the main cities (Muscat, Seeb, Salalah... etc) in Oman.</p>
        <p>You can apply it to your order by writing or copying and pasting it in the coupon code box, then click on the button to apply it. This box can be found at different stages during the checkout process. Just be careful not to confirm your order by mistake before entering the code.</p>
      </div>
      </div>
      </Grid>
      <Grid  item lg={4} md={6} sm={6}>
      <div className="lastInstructions">
      <div className="lastInstructionsImg3">
      
              </div>
              <div className='couponPageContent'>
        <h2>Make sure you meet the minimum order value</h2>
        <div style={{height:'10px'}}></div>
        <p>Many promotional vouchers require a minimum order value. This means that your order should be equal to or exceed a certain amount before you can activate the discount. The minimum order applies only on the actual cost of an item in your purchase, after any immediate discounts, and does not include additional expenses such as taxes or shipping.</p>
      </div>
      </div>
     
      </Grid>
     
    </Grid>
   
  </Grid>
  
  <Grid item lg={1} md={1} sm={1} xs={0}>

  </Grid>
</Grid>
<div style={{height:'30px'}}></div> 
<Footer/>
        </>
    )
} 









