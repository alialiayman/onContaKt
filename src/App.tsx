import React from 'react';
import './App.css';
import HajonsoftHeader from './features/HajonsoftHeader/HajonsoftHeader';
// import OptumHeader from './feature/OptumHeader/OptumHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import {  ThemeProvider, createMuiTheme } from '@material-ui/core';
import SignIn from './features/SignIn/SignIn';

const defaultTheme = createMuiTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <HajonsoftHeader />
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
