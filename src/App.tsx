import React from 'react';
import './App.css';
//import HajonsoftHeader from './feature/HajonsoftHeader/HajonsoftHeader';
import OptumHeader from './feature/OptumHeader/OptumHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './feature/Home/Home';
import { Paper, ThemeProvider, createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      dark: '#00396C',
      main: '#316BBE',
      light: '#83C8FF',
    },
    secondary: {
      main: '#C25608',
    },
    error:{
      main: '##E32315'
    },
    success:{
      main: '#627D32'
    },
    action:{
      selected: 'rgba(0,0,0,0)',
    }
  },
  //@ts-ignore
  gradient: {
    primary: {
      main: `linear-gradient(90deg, #C3373F 0%, #E6A30B 100%)`,
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
