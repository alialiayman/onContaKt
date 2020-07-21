import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './App.css';
import ImportCustomers from './features/Customers/ImportCustomers';
import ProspectCustomers from './features/Customers/ProspectCustomers';
import RelatetHeader from './features/HajonsoftHeader/RelateHeader';
import Home from './features/Home/Home';
import PrivateRoute from './features/SignIn/PrivateRoute';
import PublicRoute from './features/SignIn/PublicRoute';
import SignIn from './features/SignIn/SignIn';
import reducer from './redux/reducer';
import sagas from './redux/saga';

const defaultTheme = createMuiTheme();


const sagaMiddleware = createSagaMiddleware();
const reduxDevtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = (reduxDevtoolsCompose && reduxDevtoolsCompose({ trace: true })) || compose;
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
            <RelatetHeader />

            <div style={{ marginTop: '53px' }}>
              <PublicRoute restricted exact path="/sign-in" component={SignIn} />
              <PrivateRoute exact path="/confirmed" component={ProspectCustomers} />
              <PrivateRoute exact path="/prospects" component={ProspectCustomers} />
              <PrivateRoute exact path="/archived" component={ProspectCustomers} />
              <PrivateRoute exact path="/import" component={ImportCustomers} />
              <PrivateRoute exact path="/home" component={Home} />
            </div>
          </Provider>
        </Router>
      </ThemeProvider>
    </div >
  );
}

export default App;
