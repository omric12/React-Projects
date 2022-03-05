import './project.css';

import {
  Box,
  Flex,
  HStack,
  Image,
  Tag,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';

import { IoGlobeSharp } from 'react-icons/io5';
import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';

function Project({ project }) {
  const { img, title, description, tags, git, link } = project;

  return (
    <Flex alignItems='center' justifyContent='center' w='300px'>
      <Box
        border='1px solid black'
        w='sm'
        mx='auto'
        bg={useColorModeValue('white', 'gray.800')}
        shadow='lg'
        rounded='lg'
        overflow='hidden'>
        {img != null ? (
          <Image
            className='image'
            w='full'
            h='full'
            fit='cover'
            objectPosition='center'
            src={img}
            alt={title}
          />
        ) : (
          <></>
        )}

        <Flex alignItems='center' px={6} py={3} bg='gray.900'>
          <chakra.h1 mx={3} color='white' fontWeight='bold' fontSize='lg'>
            {title}
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.p py={2} color={useColorModeValue('gray.700', 'gray.400')}>
            {description}
          </chakra.p>

          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <chakra.h1 px={2} fontSize='sm'>
              Stacks:
            </chakra.h1>
          </Flex>

          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <HStack>
              {tags.map((tag) => {
                return <Tag key={tag}>{tag}</Tag>;
              })}
            </HStack>
          </Flex>
          <Flex
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <chakra.h1 px={2} fontSize='sm'>
              Visit:
            </chakra.h1>
          </Flex>
          <HStack
            alignItems='center'
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
            mx={2}>
            <a href={git} target='_blank' rel='noreferrer'>
              <VscGithubAlt size={24} />
            </a>
            {link != null ? (
              <a href={link} target='_blank' rel='noreferrer'>
                <IoGlobeSharp size={24} />
              </a>
            ) : (
              <></>
            )}
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default Project;
