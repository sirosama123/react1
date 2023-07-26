import { useState } from 'react'

import './App.css'
import ResponsiveAppBar from './components/bar2'
import Dropdown from './components/categories'
import ImageBanner from './components/banner'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './components/Product'
import { productData, responsive } from "./components/data";
import { productData2, responsive2 } from "./components/trendyProductData";
import CatName from './components/catName'
import BasicGrid from './components/grid1'
import ProductCard1 from './components/widgets/productCard'
import Box from '@mui/material/Box';
import CouponGrid from "./components/couponGrid"
import App22 from './components/picker1'
import GlowingText from './components/txt1'
import CouponProviders from './components/couponProviders'
import ControlledCarousel from './components/carousel1'


function App() {
  const [count, setCount] = useState(0)
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
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

  return (
    <Box >
      <ResponsiveAppBar/>
      {/* <div style={{height:'10px'}}></div>
      <Dropdown /> */}
      <ControlledCarousel/>
      <div style={{height:'300px'}}></div>
      <Box sx={{marginX:'30px'}}>
      <CatName categoryHeading="Categories" productHeading="Popular Categories"/>
      <div style={{height:'30px'}}></div>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
      <div style={{height:'60px'}}></div>
      <CatName categoryHeading="Featured" productHeading="New Arrival"/>
      <div style={{height:'30px'}}></div>
      <BasicGrid/>
      <div style={{height:'60px'}}></div>
      <CatName categoryHeading="Categories" productHeading="Best Selling Products"/>
      <div style={{height:'30px'}}></div>
      <Carousel  responsive={responsive2}>
        {product22}
      </Carousel>
      <div style={{height:'40px'}}></div>
      <CouponGrid/>
      <div style={{height:'40px'}}></div>
      <CouponProviders/>
      <div style={{height:'40px'}}></div>
     
      </Box>
    </Box>
  )
}

export default App


