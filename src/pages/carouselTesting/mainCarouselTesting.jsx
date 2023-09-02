import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './mainCarouselTesting.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MainCarouselTesting({ images }) {
  const subCarouselRef = useRef(null);
  const [isSubCarouselDragging, setIsSubCarouselDragging] = useState(false);

  const handleSubCarouselDrag = () => {
    setIsSubCarouselDragging(true);
  };

  const handleSubCarouselDragEnd = () => {
    setIsSubCarouselDragging(false);
  };

  return (
    <div className="main-carousel-container">
      <div className={`overlay ${isSubCarouselDragging ? 'visible' : ''}`}></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper2 ${isSubCarouselDragging ? 'hidden' : ''}`}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide className='swipeSlide2' key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='subCar'>
        <Swiper
          ref={subCarouselRef}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper3"
          onSlideChange={handleSubCarouselDrag}
          onSlideChangeTransitionEnd={handleSubCarouselDragEnd}
        >
          {images.map((_, index) => (
            <SwiperSlide className='swiperSlide3' key={index}>
              {`Slide ${index + 1}`}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
