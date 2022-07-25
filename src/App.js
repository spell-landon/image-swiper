import { images } from './image-data';
import { ImageSwiper } from './components/ImageSwiper';

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
