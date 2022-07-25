import { useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { classNames } from './lib/styling_functions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export const ImageSwiper = ({ images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const baseArrowClass =
    'bg-white/0 hover:bg-white/80 active:bg-white/90 rounded-full w-[40px] h-[40px] flex justify-center items-center select-none cursor-pointer font-medium text-lg';
  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }}
      modules={[Navigation]}
      slidesPerView={1}>
      {images.map((image, index) => {
        return (
          <SwiperSlide>
            <img
              src={image}
              alt={`product-${index}`}
              className='relative z-0'
            />
          </SwiperSlide>
        );
      })}
      <div className='flex w-full justify-between absolute z-10 top-[calc(50%_-_20px)] px-3'>
        <div ref={prevRef} className={classNames(baseArrowClass)}>
          <ArrowBackIosNewIcon />
        </div>
        <div ref={nextRef} className={classNames(baseArrowClass)}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </Swiper>
  );
};
