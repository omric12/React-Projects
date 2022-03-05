import {
  Button,
  Center,
  Circle,
  Container,
  Stack,
  Text,
  chakra,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import Intro from '../Intro/Intro';
import React from 'react';

function Hero() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <chakra.h1
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight='bold'
            lineHeight='none'
            letterSpacing={{ base: 'normal', md: 'tight' }}
            color={useColorModeValue('gray.900', 'gray.100')}>
            Hi, I'm{' '}
            <Text
              mb={4}
              w='full'
              bgClip='text'
              bgGradient='linear(to-r, green.400,purple.500)'
              fontWeight='extrabold'>
              Omri Cohen
            </Text>
            <Intro />
          </chakra.h1>

          <chakra.p
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.300')}>
            4th year Software development student. <br />
            Currently working at Med-Dev Soft as SQA consultant and developer.
          </chakra.p>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              Hire Me
            </Button>
            <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
              Get CV
            </Button>
          </Stack>
        </Stack>

        <Center>
          <Circle
            className='circle'
            shadow='lg'
            borderRadius='full'
            bg={isDark ? 'blue.300' : 'red'}
            opacity='0.1'
            w='300px'
            h='300px'
          />
        </Center>
      </Stack>
    </Container>
  );
}

export default Hero;
