import React from 'react';
import './App.css';
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import api from './modules/middlewares/api'
import rootReducer from './rootReducer'
import { BrowserRouter as Router } from "react-router-dom";
import RoutingComponent from './RoutingComponent';
import { setContract } from './modules/actions/SetContract';

let store: any
if (process.env.REACT_APP_ENV === 'development') store = createStore(rootReducer, compose(applyMiddleware(thunk, api), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f))
else store = createStore(rootReducer, compose(applyMiddleware(thunk, api)))

store.dispatch(setContract())

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/">
          <RoutingComponent />
        </Router>
      </Provider>
    );
  }
}
export default App;
