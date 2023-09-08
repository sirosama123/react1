import { useState } from 'react'
import CatName from '/dealsorb/src/components/catName'
import { Provider } from 'react-redux';
import store from '/dealsorb/src/stateManagement/store';
import ImageSwitcher from '/dealsorb/src/pages/productDetails'
import "react-multi-carousel/lib/styles.css";
import './index.css'
import ResponsiveAppBar from '/dealsorb/src/components/bar2'
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useData } from '../../context/myData';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';


export default function ShowableProductDetails(props) {
  const { productData } = useData();
  const { productName } = useParams();
  const parsedProductArray = productName;
    const colorList = ['#FF5733', '#33FFA6', '#3366FF', '#FF33E9'];
    const variations = ['xs', 'sm', 'md', 'lg', 'xl'];
    // const images = [
    //   "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    //   "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    //   "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    //   "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
    //   "https://images.unsplash.com/photo-1557245526-45dc0f1a8745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    //   "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    //   "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    //   "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    //   "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
    //   "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
    //   "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
    // ];

    // const initialBigImageSrc = props.images[0];
    // console.log(props.images);
    return(
      <>
      <ResponsiveAppBar activePage={'Deal & Coupons'} />

      
      <Grid container>
        <Grid item lg={0.5}>

        </Grid>
        <Grid item lg={11}>
          <div style={{height:'30px'}}></div>
          <div className="App">
            <ImageSwitcher variations={variations} images={productData} initialBigImageSrc={productData[0]} colorList={colorList} />
          </div>
          <div style={{height:'30px'}}></div>
          <CatName categoryHeading="Today's" productHeading="Related Products"/>
          <div style={{height:'30px'}}></div>
        </Grid>
        <Grid item lg={0.5}>

        </Grid>
      </Grid>
      </>
    )
} 