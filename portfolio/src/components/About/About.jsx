import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';
import background from '../../assets/about.png';

const About = () => {
  return (
    <section id='about'>
      <Text
        fontSize='25'
        py='8'
        px='4'
        w='100%'
        bgClip='text'
        bgGradient='linear(to-r,purple.400, green.800)'
        fontWeight='extrabold'>
        {'<About Me>'}
      </Text>
      <Flex
        h='350px'
        mt={2}
        py='4'
        px='4'
        mx='auto'
        shadow='lg'
        rounded='lg'
        overflow='hidden'>
        <Box
          w={2 / 5}
          fit='cover'
          objectPosition='center'
          bgSize='cover'
          style={{
            backgroundImage: `url(${background})`,
            borderRadius: '32px',
          }}></Box>

        <Box w={3 / 5} p={{ base: 4, md: 8 }}>
          <chakra.h1
            fontSize='2xl'
            fontWeight='bold'
            color={useColorModeValue('gray.800', 'white')}>
            Why Choose Me?
          </chakra.h1>

          <chakra.p py={2} color={useColorModeValue('gray.700', 'gray.400')}>
            Professional and highly motivated, Willing to be an asset for any
            organization. Looking for my next challenging position where I can
            grow and be a vital team member.
          </chakra.p>
          <UnorderedList color={useColorModeValue('gray.800', 'white')}>
            <ListItem>
              <chakra.p
                py={2}
                color={useColorModeValue('gray.700', 'gray.400')}>
                Fullstack Web Developer
              </chakra.p>
            </ListItem>
            <ListItem>
              <chakra.p
                py={2}
                color={useColorModeValue('gray.700', 'gray.400')}>
                Application Developer
              </chakra.p>
            </ListItem>
            <ListItem>
              <chakra.p
                py={2}
                color={useColorModeValue('gray.700', 'gray.400')}>
                Junior Developer
              </chakra.p>
            </ListItem>
            <ListItem>
              <chakra.p
                py={2}
                color={useColorModeValue('gray.700', 'gray.400')}>
                SQA Consultant
              </chakra.p>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </section>
  );
};

export default About;
