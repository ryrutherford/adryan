import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Music from './components/Music.js';
import Projects from './components/Projects.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/music" component={Music}/>
          <Route path="/projects" component={Projects}/>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
