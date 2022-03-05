import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  VStack,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

import React from 'react';

function Contact() {
  const { hasCopied, onCopy } = useClipboard('omric12@gmail.com');

  return (
    <section id='contact'>
      <Text
        fontSize='25'
        py='8'
        px='4'
        w='full'
        bgClip='text'
        bgGradient='linear(to-r,purple.400, green.800)'
        fontWeight='extrabold'>
        {'<Contact Me>'}
      </Text>

      <Flex align='center' justify='center' id='contact'>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align='center'
                justify='space-around'
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label='email'
                    variant='ghost'
                    size='lg'
                    fontSize='3xl'
                    icon={<MdEmail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href='https://github.com/omric12' target='_blank'>
                  <IconButton
                    aria-label='github'
                    variant='ghost'
                    size='lg'
                    fontSize='3xl'
                    icon={<BsGithub />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link
                  href='https://www.linkedin.com/in/omric12/'
                  target='_blank'>
                  <IconButton
                    aria-label='linkedin'
                    variant='ghost'
                    size='lg'
                    icon={<BsLinkedin size='28px' />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius='lg'
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow='base'>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input type='text' name='name' placeholder='Your Name' />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name='message'
                      placeholder='Your Message'
                      rows={6}
                      resize='none'
                    />
                  </FormControl>

                  <Button
                    colorScheme='blue'
                    bg='blue.400'
                    color='white'
                    _hover={{
                      bg: 'blue.500',
                    }}
                    isFullWidth>
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Flex>
    </section>
  );
}

export default Contact;
