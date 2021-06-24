import './App.css';
import React from 'react'
import Header from './Containers/headerContainer/Header';
import Menubar from './Containers/menubarContainer/Menubar';

function App() {
  return (
    <main className="wayfair-container">
      <Menubar/>
      <Header/>
    </main>
  );
}

export default App;
