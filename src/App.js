import React from 'react';
import './App.css';
import Right from './right';
import Left from './left';
import AOS from 'aos';

function App() {
  AOS.init();
  return (

    <div className="mainPage">
      <div className="left">
      <Left /></div>
      <div className="right" data-aos="fade-in">
      <Right /></div>
      
    </div>
    
  );
}

export default App;
