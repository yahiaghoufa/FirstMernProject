
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { extendTheme } from '@chakra-ui/react'; // Keep this line separate

const theme = extendTheme({}); // Crée un thème vide = thème par défaut

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      
      <App />
      
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);