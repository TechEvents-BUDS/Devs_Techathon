<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import About from './screens/About';
import Chat_With_Gemini from './screens/Chat_With_Gemini';
import Track_Your_Report from './screens/Track_Your_Report';
import Form from './screens/Form';
import Your_Monthly_Report from './screens/Your_Monthly_Report';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat_With_Gemini />} />
        <Route path="/record" element={<Form />} />
        <Route path="/YourReport" element={<Your_Monthly_Report />} />

      </Routes>
      
    </>
  );
}

export default App;
>>>>>>> 7487081230625f277d8de3abb3a15548d4275caa
