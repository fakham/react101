import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Rout from './components/Rout';
import theImage from './react.png';

// Switch ensures that one route will be chosen

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/:test_params" component={Rout} />
          </Switch>
          <img src={theImage} alt="react" className="image" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
