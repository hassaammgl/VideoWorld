import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'}>
              <Input
                placeholder="Enter E-mail here"
                border={'none'}
                outline={'none'}
                focusBorderColor={'none'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                border={'none'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Video World
            </Heading>
            <Text>All rights reserved</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
              <a href="/">Youtube</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a href="/">Instagram</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
              <a href="/">Github</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
