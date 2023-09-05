import { useState } from 'react'
import CatName from '/dealsorb/src/components/catName'
import { Provider } from 'react-redux';
import store from '/dealsorb/src/stateManagement/store';
import ImageSwitcher from '/dealsorb/src/pages/productDetails'
import "react-multi-carousel/lib/styles.css";
import './index.css'
import ResponsiveAppBar from '/dealsorb/src/components/bar2'
import Box from '@mui/material/Box';

export default function ShowableProductDetails({images}) {
    const colorList = ['#FF5733', '#33FFA6', '#3366FF', '#FF33E9'];
    const variations = ['xs', 'sm', 'md', 'lg', 'xl'];

    const initialBigImageSrc = images[0];
    return(
      <>
      <Box sx={{marginX:'-30px'}}>
      {/* <ResponsiveAppBar activePage={'Deal & Coupons'} /> */}
      </Box>
      
      <div style={{height:'30px'}}></div>
      <div className="App">
        <ImageSwitcher variations={variations} images={images} initialBigImageSrc={initialBigImageSrc} colorList={colorList} />
      </div>
    <div style={{height:'30px'}}></div>
    <CatName categoryHeading="Today's" productHeading="Related Products"/>
    <div style={{height:'30px'}}></div>
      </>
    )
} 