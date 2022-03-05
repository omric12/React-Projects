import { Box, Flex, Text, chakra, useColorModeValue } from '@chakra-ui/react';

import React from 'react';

function Resume() {
  return (
    <section id='resume'>
      <Text
        fontSize='25'
        py='8'
        px='4'
        w='full'
        bgClip='text'
        bgGradient='linear(to-r,purple.400, green.800)'
        fontWeight='extrabold'>
        {'<Resume>'}
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
        <Box w={1 / 3} fit='cover' objectPosition='center' bgSize='cover'>
          1/3
        </Box>

        <Box w={2 / 3} p={{ base: 4, md: 8 }}>
          <chakra.h1
            fontSize='2xl'
            fontWeight='bold'
            color={useColorModeValue('gray.800', 'white')}>
            2/3
          </chakra.h1>
        </Box>
      </Flex>
    </section>
  );
}

export default Resume;
