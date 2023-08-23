import React from 'react';
import { Grid } from '@mui/material';
import ProductCard1 from './widgets/productCard'; // Import your ProductCard1 component

const products = [
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
];

const ClearanceList = () => {
  return (
    <Grid container spacing={2}  sx={{ marginX: '10px' }}>
      {products.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <ProductCard1
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
            rating={item.rating}
            brandLogo={item.brandLogo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClearanceList;
