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
import '/dealsorb/src/pages/productDetailPage/index.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrismaZoom from 'react-prismazoom';
import ReactImageMagnify from 'react-image-magnify';
import { FaArrowCircleUp } from 'react-icons/fa';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Design Style', '	Modern'),
  createData('Application','Dining'),
  createData('Body Material','Acrylic'),
  createData('Warranty(Year)','1-Year',),
];



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
        <Grid item lg={6.5} md={6.5} sx={{marginX:'10px'}} >
        <Typography sx={{ fontWeight: 'bolder', fontSize: '22px', color: 'black' }}>
                Havic HV G-92 Gamepad
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginY: '0px' }}>
                    <Rating  name="read-only" size="small" value={3} readOnly />
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
                <Box sx={{color:'#DB4444',marginRight:'10px',display:'flex',alignItems: 'center',justifyContent:'center'}}>
                   <FaShare/>

                   <Typography sx={{ cursor:'pointer', fontWeight: 'bold', fontSize: '14px', color: 'black',marginLeft:'5px'}}>
                    Share
                  </Typography>
                </Box>
              </Box>
            <Grid container justifyContent="center" alignItems="center" sx={{marginY:'30px'}}>
              
              <Grid item lg={2} md={2} sm={2} xs={12} sx={{}}>
                  
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
                  <Grid item lg={10} md={10} sm={10} xs={12} sx={{}}>
                    <Box sx={{ overflow: 'hidden' }} id="imageContainer">
                   
                    <PrismaZoom>
                    <ImageMagnifier  src={bigImageSrc}  /></PrismaZoom>
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12} sx={{marginY:'30px'}}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black', marginY: '5px' }}>
                      Key attributes
                  </Typography>  
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: 'black', marginY: '10px' }}>
                  Industry-specific attributes
                  </Typography>  
                  <TableContainer sx={{ width: '600px',marginY: '10px' }} component={Paper}>
      <Table sx={{ width: '600px' }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                  </Grid>
                </Grid>
        </Grid>
        <Grid item lg={5} md={5}>
          <div className="content">
          <Typography sx={{ fontWeight: '900', fontSize: '18px', color: '#DB4444' }}>
                5% OFF
          </Typography>
          <div style={{height:"10px"}}></div>
          <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: 'grey' }}>
            Minimum Order Quantity : 1 Piece
          </Typography>
          <Typography sx={{ fontWeight: 'bolder', fontSize: '22px', color: 'black' }}>
                $50.05 - $70.04
          </Typography>
          
          <Typography sx={{ fontWeight: 'regular', fontSize: '14px', color: 'black' , marginY: '5px' }}>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </Typography>
          <div style={{height:"5px"}}></div>
          <div className="divider">

          </div>



          <Typography sx={{ fontWeight: 'bolder', fontSize: '20px', color: 'black', marginY: '5px' }}>
            Variations
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '12px', color: 'black', marginY: '5px' }}>
           Available Colors:
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
          <div style={{ height: '5px' }}></div>
          <Box sx={{display:"flex",flexDirection:'row'}}>
           <div>
           <Typography sx={{ fontWeight: 'bold', fontSize: '12px', color: 'black', marginY: '5px' }}>
           Available Sizes:
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
          <div style={{height:"10px"}}></div>
         
          

         
           </div>
           <div>
            
           </div>
          </Box>
     
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black', marginY: '5px' }}>
            Select Quantity:
          </Typography>
         
            <Box sx={{ display: 'flex', alignItems: 'center'  }}>
              <Box sx={{backgroundColor:"#DB4444", height: '40px', width: '40px', borderRadius: '5px 0px 0px 5px', borderLeft: '1px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '0px solid #DB4444',display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={incrementCounter}>
                <AddIcon sx={{color:'white'}} />
              </Box>
             
              <Box sx={{ height: '40px', width: '40px', borderRadius: '0px', borderTop: '2px solid #DB4444',borderBottom:'2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Typography sx={{ fontWeight: 'bold', fontSize: '25px', color: 'black',cursor:'pointer' }}>
                  {count}
                </Typography>

              </Box>
              
              <Box sx={{ backgroundColor:"#DB4444", height: '40px', width: '40px', borderRadius: '0px 5px 5px 0px', borderLeft: '0px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '1px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={decrementCounter}>
                <RemoveIcon sx={{color:'white'}}  />
              </Box>
            </Box>
          
          <div style={{ height: '20px' }}></div>
          
           <Box sx={{display:"flex",alignItems:'flex-start',justifyContent:'flex-start'}}>
           <Button sx={{
            width:'200px',
            height:'45px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#FFF',
            border: '2px solid #DB4444',
            borderRadius:'20px',
            backgroundColor:"#DB4444",
            marginX:'5px',
            '&:hover': {
              backgroundColor: 'white', // Set the hover color here
              color: '#DB4444',
              border: '2px solid #DB4444',
            },
          }} variant="outlined">Add To Cart</Button>
           <Button sx={{
            width:'200px',
            height:'45px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#DB4444',
            border: '2px solid #DB4444',
            borderRadius:'20px',
            '&:hover': {
              backgroundColor: '#DB4444', // Set the hover color here
              color: 'white',
              border: '2px solid #DB4444',
            },
          }} variant="outlined">Add To Wishlet</Button>
             
           </Box>
 
        <div style={{ height: '10px' }}></div>
          <div className="divider"></div>
          <div style={{ height: '10px' }}></div>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black', marginY: '5px' }}>
              Membership Benefits
          </Typography>  
          <Typography sx={{ fontWeight: 'normal', fontSize: '16px', color: 'black', marginY: '' }}>
              US $500 coupons Claim now
          </Typography>  
          <div style={{ height: '10px' }}></div>
          <div className="divider"></div>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'black', marginY: '5px' }}>
            Purchase details 
          </Typography> 
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: 'grey', marginY: '', marginRight:'5px' }}>
              Protection with 
            </Typography> 
            <img src="https://sc01.alicdn.com/kf/H84599ac94bf7424ca5a3ba928ec7580a8.png" height='22px' width='130px' alt="" srcset="" />
          </Box>

          <div style={{ height: '10px' }}></div>
          <Box sx={{display:"flex",alignItems:"start",}}>
            <img src="https://s.alicdn.com/@img/imgextra/i4/O1CN016BUj021eo2FUZ7RVr_!!6000000003917-2-tps-40-40.png" height='20px' width='20px' alt="" srcset="" />
            <Box sx={{}}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: 'black', marginLeft:'5px' }}>
              Shipping
            </Typography>
            <Typography sx={{ fontWeight: 'regular', fontSize: '14px', color: 'black', marginLeft:'5px' }}>
              Shipping fee: $1,427.03(From CN to PK)
            </Typography>
            </Box> 
          </Box>
          <div style={{ height: '15px' }}></div>
          <Box sx={{display:"flex",alignItems:"start",}}>
            <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01mmz8xE1IO0BmI3sOH_!!6000000000882-2-tps-40-40.png" height='20px' width='20px' alt="" srcset="" />
            <Box sx={{}}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: 'black', marginLeft:'5px' }}>
              Payments
            </Typography>
            <Box sx={{display:'flex'}}>
            <Box sx={{marginLeft:'5px'}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" height='30px' width='30px' alt="" srcset="" />
                          </Box>
                      
                     
                          <Box sx={{marginLeft:'5px'}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" height='30px' width='30px' alt="" srcset="" />
                          </Box>
                      
                      
                          <Box sx={{marginLeft:'5px'}}>
                          <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" height='30px' width='30px' alt="" srcset="" />
                          </Box>
                      
                     
                           <Box sx={{marginLeft:'5px'}}>
                           <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" height='30px' width='30px' alt="" srcset="" />
                           </Box>
                       
                     
                           <Box sx={{marginLeft:'5px'}}>
                           <img src="https://cdn-icons-png.flaticon.com/128/5977/5977576.png" height='30px' width='30px' alt="" srcset="" />
                           </Box>
            </Box>
            </Box> 
          </Box>
          <div style={{ height: '10px' }}></div>
          <Box sx={{display:"flex",alignItems:"start",}}>
            <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01N1uHPt25tWcYOqTGz_!!6000000007584-2-tps-40-42.png" height='20px' width='20px' alt="" srcset="" />
            <Box sx={{}}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: 'black', marginLeft:'5px' }}>
              Returns & Refunds
            </Typography>
            <Typography sx={{ fontWeight: 'regular', fontSize: '14px', color: 'black', marginLeft:'5px' }}>
              Eligible for refunds within 30 days of receiving products. View details
            </Typography>
            </Box> 
          </Box>
    </div>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageSwitcher;
