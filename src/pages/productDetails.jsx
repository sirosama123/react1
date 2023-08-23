import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBigImage } from '/dealsorb/src/stateManagement/slices/imageSlice';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Scrollbar } from 'react-scrollbars-custom';
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '/dealsorb/src/pages/productDetailsComponents/index.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrismaZoom from 'react-prismazoom';
import ReactImageMagnify from 'react-image-magnify';
import { FaArrowCircleUp } from 'react-icons/fa';
import { FaArrowCircleDown } from 'react-icons/fa';



function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 4
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width
      }}
    >
      <img
        src={src}
        // style={{ height: height, width: width }}
        id='bigImage'
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
        }}
      ></div>
    </div>
  );
}



const ImageSwitcher = ({ images, initialBigImageSrc, colorList, variations }) => {
  const sliderRef = useRef(null);
  const scrollAmount = 100;

  const sliderRefM = useRef(null);
  const scrollAmountM = 100;

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };



  const [selectedVariation, setSelectedVariation] = useState(null);
  const handleVariationClick = (variation) => {
    setSelectedVariation(variation === selectedVariation ? null : variation);
  };



  const bigImageSrc = useSelector((state) => state.image.bigImageSrc);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };
  useEffect(() => {
    if (initialBigImageSrc) {
      dispatch(setBigImage(initialBigImageSrc));
    }
  }, [dispatch, initialBigImageSrc]);

  const handleThumbnailClick = (newImageSrc) => {
    dispatch(setBigImage(newImageSrc));
  };
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
     <Grid container>   {/*  main grid of page */}
        <Grid item lg={7} md={7}>   {/*  grid for images gallery */}
            <Grid container>
              <Grid item lg={2} md={2} sm={2} xs={12}>
                
                  <div className="App">
                    <button
                        className="nav-btn"
                        onClick={() => {
                          const container = sliderRef.current;
                          container.scrollTop -= scrollAmount;
                        }}
                      >
                        <FaArrowCircleUp />
                    </button>
                    <div className="images-container" ref={sliderRef}>
                        {images.map((image) => {
                          return (

                            <img
                              className="image"
                              alt="sliderImage"
                              // key={image?.id}
                              src={image}
                              onClick={() => handleThumbnailClick(image)}
                              width= '120px'
                              height= '140px'
                              style={{
                                objectFit: 'fill',
                                backgroundColor: '#DB4444',
                                margin: '10px'
                              }}
                            />
                          );
                        })}
                      </div>
                      <button
                        className="nav-btn"
                        onClick={() => {
                          const container = sliderRef.current;
                          container.scrollTop += scrollAmount;
                        }}
                      >
                        <FaArrowCircleDown />
                      </button>
                    </div>
                    <div className="mobileViewSlider">
                      <button
                        className="nav-btnMobileView"
                        onClick={() => {
                          const container = sliderRefM.current;
                          container.scrollLeft -= scrollAmountM;
                        }}
                      >
                        <ChevronLeftIcon />
                      </button>
                      <div className="images-containerMobileView" ref={sliderRefM}>
                        {images.map((image) => {
                          return (
                            <img

                              className="image"
                              alt="sliderImage"
                              // key={image?.id}
                              src={image}
                              onClick={() => handleThumbnailClick(image)}
                              
                            />
                          );
                        })}
                      </div>
                      <button
                        className="nav-btnMobileView"
                        onClick={() => {
                          const container = sliderRefM.current;
                          container.scrollLeft += scrollAmountM;
                        }}
                      >
                        <ChevronRightIcon />
                      </button>
                    </div>
               
                  </Grid>
                  <Grid item lg={10} md={10} sm={10} xs={12}>
                    <Box sx={{ overflow: 'hidden' }} id="imageContainer">
                   
                    <PrismaZoom>
                    <ImageMagnifier  src={bigImageSrc}  /></PrismaZoom>
                    </Box>
                  </Grid>
                </Grid>
        </Grid>
        <Grid item lg={5} md={5}> {/*  grid for product description */}
          <Typography sx={{ fontWeight: 'semi-bold', fontSize: '24px', color: 'black' }}>
            Havic HV G-92 Gamepad
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginY: '5px' }}>
            <Rating name="read-only" value={3} readOnly />
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: 'grey', marginX: '5px' }}>
              (150 Reviews)
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: 'grey' }}>
              |
            </Typography>
            <Typography sx={{ fontWeight: 'semi-bold', fontSize: '14px', color: '#00FF66', marginX: '5px' }}>
              In Stock
            </Typography>

          </Box>
          <Typography sx={{ fontWeight: 'regular', fontSize: '24px', color: 'black' }}>
            Rs 1200/.
          </Typography>
          <Typography sx={{ fontWeight: 'regular', fontSize: '14px', color: 'black' }}>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </Typography>
          <Box sx={{ borderBottom: '2px solid grey', marginX: '10px' }}>

          </Box>
          <Typography sx={{ fontWeight: 'regular', fontSize: '20px', color: 'black', marginY: '5px' }}>
            Colors:
          </Typography>
          <div className="color-selector">
            {colorList.map((color, index) => (
              <div className={`color-box-main ${selectedColor === color ? 'selected' : ''}`} >
                <div
                  key={index}
                  className={`color-box ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              </div>
            ))}
          </div>
          <Typography sx={{ fontWeight: 'regular', fontSize: '20px', color: 'black', marginY: '5px' }}>
            Sizes:
          </Typography>
          <div className="variation-selector">
            {variations.map((variation, index) => (
              <button
                key={index}
                className={`variation-button ${selectedVariation === variation ? 'selected' : ''}`}
                onClick={() => handleVariationClick(variation)}
              >
                {variation}
              </button>
            ))}
          </div>
          <div style={{ height: '20px' }}></div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '5px', border: '2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={incrementCounter}>
              <AddIcon />
            </Box>
            <div style={{ width: '10px' }}></div>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '5px', border: '2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <Typography sx={{ fontWeight: 'bold', fontSize: '25px', color: 'black' }}>
                {count}
              </Typography>

            </Box>
            <div style={{ width: '10px' }}></div>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '5px', border: '2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={decrementCounter}>
              <RemoveIcon />
            </Box>
          </Box>
          <div style={{ height: '10px' }}></div>
          <Button sx={{
            paddingX: '20px',
            paddingY: '10px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#DB4444',
            border: '2px solid #DB4444',
            '&:hover': {
              backgroundColor: '#DB4444', // Set the hover color here
              color: 'white',
              border: '2px solid #DB4444',
            },
          }} variant="outlined">Add To Cart</Button>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageSwitcher;
