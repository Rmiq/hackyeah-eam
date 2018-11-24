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
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <Header></Header>
          <div class="sideNav"></div>
=======
          <div className="topNav"></div>
          <div className="sideNav"></div>
>>>>>>> 472331c13ed108e07d7c332b33566c042ad4712f
        </header>
        <main>
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
