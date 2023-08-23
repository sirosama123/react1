// import React, { useRef } from "react";
// import "./index.css";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// export default function Tabs() {
//   const sliderRef = useRef(null);
//   const scrollAmount = 100;
//   const images = [
//     "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
//     "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
//     "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
//     "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
//     "https://images.unsplash.com/photo-1557245526-45dc0f1a8745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
//     "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
//     "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
//     "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
//     "https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png",
//     "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "https://dealsorb.com/wp-content/uploads/2022/03/Graco-TurboBooster-Highback-Booster-Seat.png",
//     "https://dealsorb.com/wp-content/uploads/2022/02/71jFHRn1kL._AC_SL1500_-1.jpg",
//   ];

//   return (
//     <div  style={{display:'flex'}}>
//       <button
//         className="nav-btn"
//         onClick={() => {
//           const container = sliderRef.current;
//           container.scrollTop -= scrollAmount;
//         }}
//       >
//         <ChevronLeftIcon />
//       </button>
//       <button
//         className="nav-btn"
//         onClick={() => {
//           const container = sliderRef.current;
//           container.scrollTop += scrollAmount;
//         }}
//       >
//         <ChevronRightIcon />
//       </button>
//       <div  style={{flexDirection:'row !important'}} className="images-container" ref={sliderRef}>
//         {images.map((image) => {
//           return (
//             <img
//               className="image"
//               alt="sliderImage"
//               src={image}
//             />
//           );
//         })}
//       </div>
     
//     </div>
//   );
// }

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './index.css';

// import required modules
import { EffectCreative } from 'swiper/modules';

export default function Tabs() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper5"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
