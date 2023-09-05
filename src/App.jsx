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
import CarouselSlider22 from './pages/test2';
import MainPageSlider11 from './pages/mainPageSlider/mainPageSlider';
import MainLandingPage from './pages/landingPage/landingPage';
import Routing from './Routes/routing';
import MainCarouselTesting from './pages/carouselTesting/mainCarouselTesting';
import SubCarouselTesting from './pages/carouselTesting2/subCarouselTesting';
import MainTree from './pages/mainTree/mainTree';
import MainCategories from './pages/categoriesPage/mainCategoriesPage';
import AllStores from './pages/AllStores/allStores';



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
function App() {
  
  return (
      <>
      <Routing />
      </>
  )
}
export default App


