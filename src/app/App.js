import React, {Component} from 'react';
import './App.scss';
import './components/Header'
import {Router} from "@reach/router"
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Register from './pages/Register';

class App extends Component {
  render() {

    return (
      <div className="app">
        <header className="app-header">
          <Header></Header>
          <div class="sideNav"></div>
        </header>
        <main className="app-container">
          <Router>
            <Homepage path="/"></Homepage>
            <Register path="rejestracja"></Register>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
