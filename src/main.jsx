import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import App from './App.jsx'

// move this to it's own file 
const theme = createTheme({

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
