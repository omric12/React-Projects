import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import Web from './Web';
import Mobile from './Mobile';
import { RiApps2Line, RiApps2Fill } from 'react-icons/ri';
import './header.css';
import { RiCloseCircleLine, RiCloseCircleFill } from 'react-icons/ri';

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack>
      <Flex w='100%' justifyContent={'space-between'} alignItems={'center'}>
        <Heading ml='8' size='md' fontWeight='semibold' className='logo'>
          OMRI COHEN
        </Heading>
        <div className='menu'>
          <Web />
        </div>
        <div className='mobile'>
          <IconButton
            ml={2}
            icon={
              isOpen ? (
                isDark ? (
                  <RiCloseCircleLine fontSize={'24px'} />
                ) : (
                  <RiCloseCircleFill fontSize={'24px'} />
                )
              ) : isDark ? (
                <RiApps2Line />
              ) : (
                <RiApps2Fill />
              )
            }
            isRound='true'
            onClick={() => setIsOpen(!isOpen)}></IconButton>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </Flex>
    </VStack>
  );
}

export default Header;
