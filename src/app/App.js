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
<<<<<<< HEAD
          <div className="sideNav"></div>
=======

>>>>>>> 1ff33b1266e2841cb45bd6ef681ee893b6c7bab1
        </header>

        <main className="app-container">
<<<<<<< HEAD
          <Router>
            <Homepage path="/"></Homepage>
            <FindAppointment path="znajdz-wizyte"></FindAppointment>
          </Router>
=======
          <div className="app-content">
            <Router>
              <Homepage path="/"></Homepage>
              <Register path="rejestracja"></Register>
            </Router>
          </div>
>>>>>>> 1ff33b1266e2841cb45bd6ef681ee893b6c7bab1
        </main>
      </div>
    );
  }
}

export default App;
