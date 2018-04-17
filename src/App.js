import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TransitionSwitch from 'react-router-transition-switch'
import Fader from 'react-fader'

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import MainPage from './components/MainPage';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <TransitionSwitch component={Fader}>
            <Route exact path="/" component={MainPage} />
            <Route path="/resume/" component={Resume} />
            <Route path="/portfolio/" component={MainPage} />
          </TransitionSwitch>
        </div>
      </Router>
    );
  }
}

export default App;
