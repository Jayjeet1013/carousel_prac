import dynamic from 'next/dynamic';
import CarouselComponent from '../components/Carousel';



const HomePage = () => {
  
  const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

  return (
    <div>
    <h1>Carousel Example</h1>
    <CarouselComponent images={images} />
  </div>

  );
};

export default HomePage;
