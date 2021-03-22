import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

import Header from './header';
import Footer from './footer';
import Home from './Home';
import MeetTheTeam from './pages/Meet-the-team';
import Services from './pages/Services';
import ContactUs from './pages/Contact-us';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import demoTimesheet from "./pages/demoTimesheet";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Meet-the-team" component={MeetTheTeam} />
              <Route path="/Services" component={Services} />
              <Route path="/Contact-Us" component={ContactUs} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/timesheet" component={Landing} /> */}
              <Route exact path="/demo" component={demoTimesheet} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
            {/* <Route exact path="/" component={Landing} /> */}


           
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;