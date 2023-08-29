import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box
      p={10}
      bg="gray.800"
      color="white"
      borderRadius="md"
      textAlign="start"
      maxW="500px"
      ml="auto" 
      mr={40}
      id='about'
    >

<h1 style={{  fontFamily: 'Bree Serif, serif' }}>
        About Me
      </h1>

      <h2 style={{  color: 'cyan', fontWeight: 'bold',marginTop: '1rem'}}>
        I am <span style={{ color: 'cyan' }}>Tanuj Masiwal</span>
      </h2>
      <h3 mt={4} fontSize="lg">
        Passionate Full Stack Developer specialized in MERN stack. Proficient in HTML, CSS, JavaScript, Node.js, MongoDB, and Express. Committed to crafting exceptional user experiences. Completed a rigorous 30-week intensive training at Masai School, ready to excel in a dynamic startup environment.
      </h3>
    </Box>
  );
};

export default About;
