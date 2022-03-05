import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectsList from './components/Projects/ProjectsList';
import Resume from './components/Resume/Resume';
import { Stack } from '@chakra-ui/react';
function App() {
  return (
    <Stack p='8' w='90%' m='auto'>
      <Header />
      <Hero />
      <About />
      {/* <Resume /> */}
      <ProjectsList />
      <Contact />
    </Stack>
  );
}

export default App;
