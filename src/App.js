import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Textbox from './Components/Textbox.js';
import Alert from './Components/Alert.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const toggleMode =()=>{ 
    if (mode === 'light') {
      setMode('dark');
      setText('Enable Light mode');
      document.body.style.backgroundColor='#042743';
      showalert('Dark Mode Has Been Enabled', 'success');
      document.title = 'TextUtils-Dark Mode';
      // setInterval(() => {
      //     document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 1500);
    }
    else {
      setMode('light');
      setText('Enable Dark mode');
      document.body.style.backgroundColor='white';
      showalert('Light Mode Has Been Enabled', 'success');
      document.title = 'TextUtils-Light Mode';
    }
  };
  // Light Mode State
  const [mode, setMode] = useState('light');
  // Dark Mode State
  const [text, setText]= useState('Enable Dark Mode');
  // Alert State
  const [alert, setAlert] = useState(null);
  // Alert Function
  const showalert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" home="Home" about="About Us" search="Search" mode={mode} toggleMode={toggleMode} text={text}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textbox showalert={showalert} headings="Enter the text for Analyze" mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
