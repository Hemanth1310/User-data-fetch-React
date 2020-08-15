import React ,{useState}from 'react';
import './App.css';

import Climp from './components/climp'
// Component that roots Climp
function App() {
  return (
    <div className="App">
     
      <h1>Pick a User </h1>
     
      <Climp></Climp>
    
      </div>
  );
}

export default App;
