import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';


const HeadingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
      >
        <Box w={'full'} h={'100vh'}>
          <img src={img2} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...HeadingOptions}
          >
            Watch the future
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <img src={img1} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...HeadingOptions}
          >
            Think like a Beast
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <img src={img3} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...HeadingOptions}
          >
            Gaming is the future
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <img src={img4} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...HeadingOptions}
          >
            Illuminate the world
          </Heading>
        </Box>
      </Carousel>
    </>
  );
}

export default MyCarousel