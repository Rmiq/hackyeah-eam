import React, {Component} from 'react';
import './App.scss';
import './components/Header'
import {Router} from "@reach/router"
import Header from './components/Header';
import FindAppointment from './pages/FindAppointment';
import Analytics from './pages/Analytics';
import SuccessPage from './pages/SuccessPage';

class App extends Component {
  render() {

    return (
      <div className="app">
        <header className="app-header">
          <Header></Header>
        </header>

        <main className="app-container">
          <Router>
            <FindAppointment path="/"></FindAppointment>
            <SuccessPage path="dziekujemy"></SuccessPage>
            <Analytics path="dane-analityczne/*/"></Analytics>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
