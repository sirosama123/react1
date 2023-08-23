import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts.css'
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


