import React from 'react';
import './App.css';
import DataDisplay from './components/DataDisplay';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataDisplay/>
    </div>
  );
}

export default App;
