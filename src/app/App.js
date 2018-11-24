import React, {Component} from 'react';
import './App.scss';
import './components/Header'
import {Router} from "@reach/router"
import Header from './components/Header';
import Homepage from './pages/Homepage';
import FindAppointment from './pages/FindAppointment';

class App extends Component {
  render() {

    return (
      <div className="app">
        <header className="app-header">
          <Header></Header>
          <div className="sideNav"></div>
        </header>
        <main className="app-container">
          <Router>
            <Homepage path="/"></Homepage>
            <FindAppointment path="znajdz-wizyte"></FindAppointment>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
