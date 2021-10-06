import React from 'react';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import Search from './components/search/Search';
import './App.css';
import Navbar from './components/header/Navbar';


const App = () => {

  
  return (
    <Router>
      <Navbar/>
      <Search/>
      
    </Router>
  );
}

export default App;
