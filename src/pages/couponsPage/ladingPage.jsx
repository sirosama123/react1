import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './index.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Tabs({images}) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiper && swiper.activeIndex < swiper.slides.length - 1) {
        swiper.slideNext();
      } else {
        swiper.slideTo(0);
      }
    }, 3000); // Change the delay here as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // direction="vertical"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={4} // Display two slides at a time
        loop={true} // Allow looping through slides
        speed={500} // Transition speed in milliseconds
        pagination={false} // Hide pagination dots
        navigation={true}

        modules={[EffectCoverflow, Pagination]}
        
        className="mySwiper"
      >   {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
         {/* <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dke6pt7l5f3jihkmhjzm" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.vox-cdn.com/thumbor/J5qg1LLvKq1DGwrfbahJcnI7-vU=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19218416/acastro_190920_1777_amazon_0002.0.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wko3ka42ewzfyanrvm9h" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://a.namshicdn.com/cms/Logos/namshi_square.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://savyour-prod.s3-ap-south-1.amazonaws.com/brands/2806/1687007931.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.businesslist.pk/img/pk/b/1653645324-40-dekhlo-pk.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.businesslist.pk/img/pk/b/1653645324-40-dekhlo-pk.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOvTAMvoMWZejLewsVKr0arfX9Ama-q6hbOHIZ_QBXQ87sm0UfuCL70ejShVVsF97Iyg&usqp=CAU" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
