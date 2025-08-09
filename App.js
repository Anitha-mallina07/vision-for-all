
import React from 'react';
import './App.css';
import Header from './components/Header';
import AuthBox from './components/AuthBox';


function App() {
  
  return (
    <div>
       <Header />
      <AuthBox />
      <div className="contact-info">
        <p>Contact: M.Anitha</p>
        <p>Phone: 1234567890</p>
      </div>
    </div>
  );
}

export default App;
