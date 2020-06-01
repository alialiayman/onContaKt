import React from 'react';
import './App.css';
import OptumHeader from './feature/OptumHeader/OptumHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './feature/Home/Home';
import { Paper } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Router>
        <OptumHeader />
        <Paper elevation={10} style={{ margin: '80px auto', height: '80vh', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Route exact path="/pages/aali66/optum-header/:id">
            <Home />
          </Route>
          <Route exact path="/:id">
            <Home />
          </Route>
        </Paper>
      </Router>
    </div>
  );
}

export default App;
