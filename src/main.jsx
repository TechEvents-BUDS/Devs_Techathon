import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <App />
  </BrowserRouter>,
>>>>>>> 7487081230625f277d8de3abb3a15548d4275caa
)
