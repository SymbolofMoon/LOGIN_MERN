import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Login from './screens/Login.jsx';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import Private from './screens/Private.jsx';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/' exact render={props => <App {...props} />} />
    
    <Route path='/register' exact render={props => <Register {...props} />} />
    <Route path='/login' exact render={props => <Login {...props} />} />
    <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
    <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
    <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
    <PrivateRoute path="/private" exact component={Private} />
    <Redirect to='/' />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

