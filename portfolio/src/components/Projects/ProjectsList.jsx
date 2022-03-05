import { Center, Text } from '@chakra-ui/react';
import React from 'react';
import Project from './Project';
import './ProjectsList.style.css';
import { projectsList } from '../../assets/data';

function ProjectsList(props) {
  return (
    <section id='projects'>
      <Text
        fontSize='25'
        py='8'
        px='4'
        w='full'
        bgClip='text'
        bgGradient='linear(to-r,purple.400, green.800)'
        fontWeight='extrabold'>
        {'<Projects>'}
      </Text>
      <Center>
        <div className='projectsList'>
          {projectsList.map((item) => {
            return <Project key={item.id} project={item} />;
          })}
        </div>
      </Center>
    </section>
  );
}

export default ProjectsList;
