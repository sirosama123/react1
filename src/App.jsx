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
import Tabs from './pages/couponsPage/components/ladingPage'
import CouponCardDeal from './pages/couponsPage/components/dealCards'
import ProviderShops from './pages/couponsPage/components/providersShop'
import SliderCouponMain from './pages/couponsPage/components/mainSliderCouponPage'
import Option2 from './pages/couponsPage/components/storeSliderOption'
import MainCouponLandingPage from './pages/couponsPage/mainCouponsLandingPage'
import ShowableProductDetails from './pages/productDetailPage/showableProductDetails'
import MainStorePage from './pages/storesCouponsPage/mainStorePage'
import TestTodo from './pages/test';
import Test22 from './pages/test2';



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
   
  return (
    <Box >
     <ResponsiveAppBar/>
     {/* <TestTodo/> */}
 <ControlledCarousel/>
 {/* <Test22/> */}
       {/* <MainCouponLandingPage/>  */}
      {/* <MainStorePage/> */}
      <Box sx={{marginX:'30px'}}>
      <CatName categoryHeading="Categories" productHeading="Popular Categories"/>
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
      </Grid> 
     


   
{/* <ShowableProductDetails/> */}
     
    
      </Box>
      <div style={{height:'30px'}}></div>
      <Footer/>
    </Box>
  )
}
export default App


