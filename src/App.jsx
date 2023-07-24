import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/bar2'
import Dropdown from './components/categories'
import ImageBanner from './components/banner'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './components/Product'
import { productData, responsive } from "./components/data";
import CatName from './components/catName'
import Colag1 from './components/collage1'
import BasicGrid from './components/grid1'
import ProductCard1 from './components/widgets/productCard'



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

  return (
    <div>
      <ResponsiveAppBar/>
      <div style={{height:'10px'}}></div>
      <Dropdown />
      <ImageBanner/>
      <div style={{height:'300px'}}></div>
      <CatName categoryHeading="Categories" productHeading="Popular Categories"/>
      <div style={{height:'20px'}}></div>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
      <div style={{height:'20px'}}></div>
      <BasicGrid/>
      <ProductCard1/>
    </div>
  )
}

export default App
