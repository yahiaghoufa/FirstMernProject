import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import CreatePage from "./Pages/CreatePage.jsx";
import HomePage from './Pages/HomePage.jsx';
import Navbar from './components/navbar.jsx';



function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
