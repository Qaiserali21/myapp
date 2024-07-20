import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
// import About from './Components/About.js';
import Textbox from './Components/Textbox.js';
import Alert from './Components/Alert.js';

function App() {
  const toggleMode =()=>{ 
    if (mode === 'light') {
      setMode('dark');
      setText('Enable Light mode');
      document.body.style.backgroundColor='#042743';
      showalert('Dark Mode Has Been Enabled', 'success');
    }
    else {
      setMode('light');
      setText('Enable Dark mode');
      document.body.style.backgroundColor='white';
      showalert('Light Mode Has Been Enabled', 'success');
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
      <Navbar title="TextUtils" home="Home" about="About Us" search="Search" mode={mode} toggleMode={toggleMode} text={text}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textbox showalert={showalert} headings="Enter the text for Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
