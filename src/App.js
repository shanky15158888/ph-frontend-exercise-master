import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/homepage/Homepage';

function App() {
  return (
    <Router>
      <main className="wayfair-container">
        <Switch>
          <Route path="/" exact>{Homepage}</Route>
          <Route path="/home">{Homepage}</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
