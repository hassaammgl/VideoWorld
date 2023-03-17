import React from 'react';
import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import { BsFillCloudUploadFill } from 'react-icons/bs';

const Upload = () => {
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
          <BsFillCloudUploadFill size={'10vmax'} />
          <form>
            <HStack>
              <Input required type={'file'} />
                          <Button css={{
                              "input::file-selector-button": {
                      
                  }
              }} colorScheme={'purple'} type={'submit'}>Upload</Button>
            </HStack>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Upload;
