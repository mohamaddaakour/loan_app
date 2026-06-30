// this is the file that starts react

// strict mode helps us find bugs during development
import { StrictMode } from 'react'

// the function to connect react to the HTML
import { createRoot } from 'react-dom/client'

// App is the first component that will be rendered
import App from './App.tsx'

// here we are saying put my code in the root tag in the HTML page
// the ! means I guarantee this element exists and will not be null
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
