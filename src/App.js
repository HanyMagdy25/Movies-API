import React from 'react';
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/pages/home/Home';
import Movies from './components/movies/Movies';
import Trending from './components/pages/trending/Trending';
import Top from './components/pages/top/Top';
import SignUp from './components/pages/sign up/SignUp';
import WatchList from './components/pages/watchlist/WatchList';
// import { GlobalProvider } from './components/context/GlobalState';


const App = () => {

  
  return (
    

    
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route path="/movies" component={Movies}  />
        <Route path="/trending" component={Trending}/>
        <Route path="/top" component={Top}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/watchlist" component={WatchList}/>

      </Switch>
      
    </Router>
    
  );
}

export default App;
