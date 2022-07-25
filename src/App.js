import { useRef } from 'react';
import { images } from './image-data';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { classNames } from './lib/styling_functions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  return (
    <div className='bg-white w-full h-full max-w-7xl mx-auto flex flex-col md:flex-none md:grid md:grid-cols-9 md:gap-x-4 lg:gap-x-8 md:mt-8'>
      <div className='h-full flex justify-center items-center relative overflow-hidden md:flex-none md:col-span-4'>
        <ImageSwiper images={images} />
      </div>
      <div className='bg-blue-200/20 w-full h-full flex flex-grow justify-center items-center md:flex-none md:col-span-5'>
        <p>Product Details</p>
      </div>
    </div>
  );
}

export default App;

const ImageSwiper = ({ images }) => {
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
