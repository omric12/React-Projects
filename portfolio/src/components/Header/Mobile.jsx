import { Button, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { RiSuitcaseLine, RiSuitcaseFill } from 'react-icons/ri';
import { HiOutlineDocumentText, HiDocumentText } from 'react-icons/hi';
import {
  BsPersonFill,
  BsPerson,
  BsEnvelope,
  BsFillEnvelopeFill,
} from 'react-icons/bs';
import './mobile.css';

function Mobile({ isOpen, setIsOpen }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div className='mobile_menu' onClick={() => setIsOpen(!isOpen)}>
      <VStack className='options'>
        <a href='#about'>
          <Button
            fontWeight='normal'
            borderRadius='16px'
            leftIcon={isDark ? <BsPerson /> : <BsPersonFill />}
            variant='solid'>
            About Me
          </Button>
        </a>
        <a href='#resume'>
          <Button
            fontWeight='normal'
            borderRadius='16px'
            leftIcon={isDark ? <HiOutlineDocumentText /> : <HiDocumentText />}
            variant='solid'>
            Resume
          </Button>
        </a>

        <a href='#projects'>
          <Button
            fontWeight='normal'
            borderRadius='16px'
            leftIcon={isDark ? <RiSuitcaseLine /> : <RiSuitcaseFill />}
            variant='solid'>
            Projects
          </Button>
        </a>
        <a href='#contact'>
          <Button
            fontWeight='normal'
            borderRadius='16px'
            leftIcon={isDark ? <BsEnvelope /> : <BsFillEnvelopeFill />}
            variant='solid'>
            Contact
          </Button>
        </a>
        <IconButton
          ml={2}
          w={'25%'}
          align={'center'}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={() => toggleColorMode}></IconButton>
      </VStack>
    </div>
  );
}

export default Mobile;
