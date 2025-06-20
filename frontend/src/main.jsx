import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ItemProvider>
        <App />
      </ItemProvider>
    </BrowserRouter>
  </StrictMode>
);
