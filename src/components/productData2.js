export const discountProdcts = [
    {
      id: 1,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
      name: "Furhaven Orthopedic",
      price: "19.99",
      description: "Some text about the product..",
      rating:5,
      discount:"10"
    },
    {
      id: 2,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
      name: "WATER BOTTLES",
      price: "21.99",
      description: "Some text about the product..",
      rating:4,
      discount:"30"
    },
    {
      id: 3,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
      name: "KITCHEN ACCESSORIES",
      price: "99.99",
      description: "Some text about the product..",
      rating:5,
      discount:"30"
    },
    {
      id: 4,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/02/awesome-t-shirt-designs-41b.jpg",
      name: "HOME IMPROVEMENT",
      price: 5,
      description: "Some text about the product..",
      rating:"5.0",
      discount:"50"
    },
    {
      id: 5,
      imageurl:
        "https://dealsorb.com/wp-content/uploads/2022/03/Triple-Zip-Small-Crossbody-Bag.png",
      name: "MOBILE ACCESSORIES",
      price: "38.99",
      description: "Some text about the product..",
      rating:3,
      discount:"50"
    },
    {
      id: 6,
      imageurl:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "ORGANIZERS",
      price: "149.99",
      description: "Some text about the product..",
      rating:5,
      discount:"10"
    },
    {
      id: 7,
      imageurl:
        "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sunglasses",
      price: "38.99",
      description: "Some text about the product..",
      rating:3,
      discount:"15"
    },
    {
      id: 8,
      imageurl:
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dove cream",
      price: "49.99",
      description: "Some text about the product..",
      rating:5,
      discount:"30"
    },
  ];
  
  export const discountProdctsResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };