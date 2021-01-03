import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/' exact render={props => <App {...props} />} />
    
    <Route path='/register' exact render={props => <Register {...props} />} />
    <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
    
    <Redirect to='/' />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

