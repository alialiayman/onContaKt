import React from 'react';
import './App.css';
import HajonsoftHeader from './features/HajonsoftHeader/HajonsoftHeader';
// import OptumHeader from './feature/OptumHeader/OptumHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import SignIn from './features/SignIn/SignIn';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import sagas from './redux/saga';
import reducer from './redux/reducer';

const defaultTheme = createMuiTheme();


const sagaMiddleware = createSagaMiddleware();
const reduxDevtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = (reduxDevtoolsCompose && reduxDevtoolsCompose({trace: true})) || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)));
  
sagaMiddleware.run(sagas);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Provider store={store}>
            <HajonsoftHeader />
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Provider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
