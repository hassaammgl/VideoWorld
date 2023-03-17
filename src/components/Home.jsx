import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import MyCarousel from './MyCarousel';
import img5 from '../assets/5.png';

const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            m={'auto'}
            borderBottom={'2px solid'}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <img src={img5} h={['40', '400']} />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est
              dolorum inventore sit molestias expedita minima excepturi velit
              facere architecto, corporis cum itaque tenetur consequatur totam
              possimus quas? Eius similique ipsum voluptatibus cumque blanditiis
              facere tempora suscipit et commodi, ratione repudiandae nulla
              dolore quibusdam nobis. Ex recusandae provident cumque
              perspiciatis?
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
