import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './components/bar2'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryDesign2 from './components/Product'
import { productData, responsive } from "./components/data";
import { productData2, responsive2 } from "./components/trendyProductData";
import { discountProdcts, discountProdctsResponsive } from "./components/productData2";
import CatName from './components/catName'
import BasicGrid from './components/grid1'
import ProductCard1 from './components/widgets/productCard'
import Box from '@mui/material/Box';
import CouponGrid from "./components/couponGrid"
import CouponProviders from './components/couponProviders'
import ControlledCarousel from './components/carousel1'
import { Link, Element } from 'react-scroll';
import Heading1 from './components/subComponents/heading1';
import Banner1 from './components/banner1';
import Grid from '@mui/material/Grid';
import ClearanceList from './components/clearanceScen';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import DiscountCard1 from "./components/discountCard"
import Benefits from './components/benefits'
import Footer from './components/footer'
import ImageSwitcher from '/dealsorb/src/pages/productDetails'
import { Provider } from 'react-redux';
import store from './stateManagement/store';
import Tabs from './pages/couponsPage/ladingPage'
import CouponCardDeal from './pages/couponsPage/components/dealCards'
import ProviderShops from './pages/couponsPage/components/providersShop'




function App() {
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
   
  return (
    <Box >
      <ResponsiveAppBar/>
      {/* <ControlledCarousel/> */}
      <div className='couponBgImg'>
      <Tabs images={brands} />
      </div>
      <div style={{height:'30px'}}></div>
      <div className='couponBanner'>
     
      </div>
      <div style={{height:'30px'}}></div>
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
      <ProviderShops/>
      <div style={{height:'30px'}}></div>
      <Grid container>
        <Grid item lg={1}>

        </Grid>
        <Grid item lg={10}>
          <div className='couponPageContent'>
              <h1>
              Oman Discounts, Coupons & Promo Codes July 2023
              </h1>
              <Grid container>
                <Grid item lg={3}>
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
                <Grid item lg={3}>
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
                <Grid item lg={6}>
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
        <Grid item lg={1}>

        </Grid>
      </Grid>
      <Box sx={{marginX:'30px'}}>
      {/* <CatName categoryHeading="Categories" productHeading="Popular Categories"/>
      <div style={{height:'30px'}}></div>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
      <div style={{height:'60px'}}></div>
      <CatName categoryHeading="Featured" productHeading="New Arrivals"/>
      <div style={{height:'30px'}}></div>
      <BasicGrid/>
      <div style={{height:'60px'}}></div>
      <CatName categoryHeading="Categories" productHeading="Best Selling Products"/>
      <div style={{height:'30px'}}></div>
      <Carousel  responsive={responsive2}>
        {product22}
      </Carousel>
      <div style={{height:'60px'}}></div>
      <CatName categoryHeading="Our Products" productHeading="Deals & Coupons"/>
      <div style={{height:'30px'}}></div>
      <CouponProviders/>
      <div style={{height:'40px'}}></div>
      <Banner1/>
      <div style={{height:'60px'}}></div>
      <Box sx={{display:'flex',alignItems:'',justifyContent:'space-between'}}>
       <CatName categoryHeading="This Month" productHeading="Clearance Sale"/>
       <Button sx={{height:'40px',backgroundColor:'#DB4444',paddingX:'50px'}}>
        <Box sx={{color:'white',fontWeight:'bold'}}>
         See All
        </Box>
        </Button>
      </Box>
      <div style={{height:'30px'}}></div>
      <ClearanceList/>
      <div style={{height:'60px'}}></div>
      <CatName categoryHeading="Today's" productHeading="Summer Discount"/>
      <div style={{height:'30px'}}></div>
      <Carousel  responsive={discountProdctsResponsive}>
        {product23}
      </Carousel>
      <div style={{height:'120px'}}></div>
      <Grid container >
        <Grid item lg={1}>
          
        </Grid>
        <Grid item lg={10}>
          <Benefits/>
        </Grid>
        <Grid item lg={1}>
          
        </Grid>
      </Grid>  */}
     


     {/* <div style={{height:'30px'}}></div>
      <Provider store={store}>
      <div className="App">
        <ImageSwitcher variations={variations} images={images} initialBigImageSrc={initialBigImageSrc} colorList={colorList} />
      </div>
    </Provider>
    <div style={{height:'60px'}}></div>
    <CatName categoryHeading="Today's" productHeading="Related Products"/> */}
      <div style={{height:'30px'}}></div>

     
    
      </Box>
    
      <Footer/>
    </Box>
  )
}
export default App


