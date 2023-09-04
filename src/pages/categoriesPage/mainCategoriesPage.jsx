import { useState } from 'react'
import Grid from '@mui/material/Grid';
import './mainCategoriesPage.css'
import CategoryTabsMain from './components/categoryTabs';
import IconsTabMainCate from './components/iconsTab';
import automotiveIcon from '../../assets/automotive.png'
import couponsIcon from '../../assets/coupons.png'
import electronicsIcon from '../../assets/electronics.png'
import flowersIcon from '../../assets/flowers.png'
import healthIcon from '../../assets/health.png'
import homegardenIcon from '../../assets/home_garden.png'
import petsIcon from '../../assets/pets.png'
import shoesIcon from '../../assets/shoes.png'
import sportsIcon from '../../assets/sports.png'
import toysIcon from '../../assets/toys.png'
import ProductCard1 from '../../components/widgets/productCard';
import Pagination from '@mui/material/Pagination';
import RangeSlider from './components/rangeSelector';
import CheckboxList from './components/filtersCategory';
import Button from '@mui/material/Button';
import Footer from '../../components/footer';
import ResponsiveAppBar from '../../components/bar2';



const data = [
        {
        id: 1,
        category: 'Automotive',
        src:automotiveIcon
        },
        {
        id: 2,
        category: 'Electronics',
        src:electronicsIcon
      },
      {
        id: 3,
        category: 'Gifts & Flowers',
        src:flowersIcon
      },
      {
        id: 3,
        category: 'Health',
        src:healthIcon
      },
      {
        id: 3,
        category: 'Home & Garden',
        src:homegardenIcon
      },
      {
        id: 4,
        category: 'Shoes',
        src:shoesIcon
      },
      {
        id: 4,
        category: 'Sports',
        src:sportsIcon
      },
      {
        id: 5,
        category: 'Pets',
        src:petsIcon
      },
      {
        id: 6,
        category: 'Games & Toys',
        src:toysIcon
      },
      {
        id: 7,
        category: 'Coupons',
        src:couponsIcon
      },
  ];



  const Products = [
    {
      id: 1,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
      name: "Furhaven Orthopedic",
      price: "19.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
    },
    {
      id: 2,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
      name: "WATER BOTTLES",
      price: "21.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      id: 3,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
      name: "KITCHEN ACCESSORIES",
      price: "99.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268"
    },
    {
      id: 4,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/02/awesome-t-shirt-designs-41b.jpg",
      name: "HOME IMPROVEMENT",
      price: "14.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      id: 5,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/03/Triple-Zip-Small-Crossbody-Bag.png",
      name: "MOBILE ACCESSORIES",
      price: "38.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      id: 6,
      imageurl:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "ORGANIZERS",
      price: "149.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      id: 7,
      imageurl:
        "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sunglasses",
      price: "38.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      id: 8,
      imageurl:
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dove cream",
      price: "49.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
        id: 1,
        imageurl:
          "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
        name: "Furhaven Orthopedic",
        price: "19.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
      },
      {
        id: 2,
        imageurl:
          "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
        name: "WATER BOTTLES",
        price: "21.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
      {
        id: 3,
        imageurl:
          "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
        name: "KITCHEN ACCESSORIES",
        price: "99.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268"
      },
      {
        id: 4,
        imageurl:
          "https://dealsorb.com/wp-content/uploads/2022/02/awesome-t-shirt-designs-41b.jpg",
        name: "HOME IMPROVEMENT",
        price: "14.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
      {
        id: 5,
        imageurl:
          "https://dealsorb.com/wp-content/uploads/2022/03/Triple-Zip-Small-Crossbody-Bag.png",
        name: "MOBILE ACCESSORIES",
        price: "38.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
      {
        id: 6,
        imageurl:
          "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "ORGANIZERS",
        price: "149.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
      {
        id: 7,
        imageurl:
          "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Sunglasses",
        price: "38.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
      {
        id: 8,
        imageurl:
          "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Dove cream",
        price: "49.99",
        description: "Some text about the product..",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      },
  ];
  
function MainCategories() {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * 9;
    const indexOfFirstItem = indexOfLastItem - 9;
    const currentItems = Products.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, newPage) => {
      setCurrentPage(newPage);
    };
    return(
        <Grid container>
             <Grid container>
                <Grid item lg={12}>
                <ResponsiveAppBar activePage={'Categories'} />
                </Grid>
           </Grid>
           <Grid item lg={1}>
            
           </Grid>
           <Grid item lg={10}>
                <Grid container>
                    <Grid item lg={12} >
                        <div className="mainCategoryBanner">

                        </div>
                    </Grid>
                    <Grid item lg={0.5} ></Grid>
                    <Grid item lg={11} >
                        <IconsTabMainCate/>
                        
                    </Grid>
                     <Grid item lg={0.5} ></Grid>
                     <Grid item lg={0.5} ></Grid>
                    <Grid item lg={11} >
                        <div className="categories_section">
                            <Grid container>
                                <Grid sx={{textAlign:'center'}} items lg={3}>
                                    <div className="sub_heading">
                                        Categories
                                    </div>
                                    <div className="divider">

                                    </div>
                                    <CategoryTabsMain data={data} />
                                    <div style={{height:'20px'}}></div>
                                    <div className="sub_heading">
                                        Price Range
                                    </div>
                                    <div style={{height:'10px'}}></div>
                                    <div className="divider"></div>
                                    <div style={{height:'20px'}}></div>
                                    <RangeSlider/>
                                    <div style={{height:'20px'}}></div>
                                    <div className="sub_heading">
                                        Brand Selection
                                    </div>
                                    <div style={{height:'10px'}}></div>
                                    <div className="divider"></div>
                                    <div style={{height:'10px'}}></div>
                                    <CheckboxList/>
                                    <div style={{height:'20px'}}></div>
                                    <Button variant="contained" sx={{ borderRadius: '7px', backgroundColor: '#DB4444', paddingX: '50px' }}>Apply Filter</Button>
                                </Grid>
                                <Grid items lg={9}>
                                    <div className="categories_section_b">
                                        <Grid container spacing={0}>
                                            {currentItems.map((item) => (
                                                <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                                                    <ProductCard1  
                                                        name={item.name}
                                                        url={item.imageurl}
                                                        price={item.price}
                                                        description={item.description}
                                                        rating={item.rating}
                                                        brandLogo={item.brandLogo} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                        <div style={{height:'20px'}}></div>
                                        <div style={{width:'100%',display:'flex',justifyContent:"flex-end",alignItems:'center'}}>
                                            <div style={{width:'2%',height:'2%'}}>
                                                
                                            </div>
                                            <Pagination
                                                count={Math.ceil(data.length / 9)}
                                                page={currentPage}
                                                onChange={handlePageChange}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                     <Grid item lg={0.5} ></Grid>
                </Grid>
           </Grid>
           <Grid item lg={1}>

           </Grid>
           <Grid container>
                <Grid item lg={12}>
                <Footer/>
                </Grid>
           </Grid>
        </Grid>
    )
}
export default MainCategories