// src/js/components/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Users from './Users/Users';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Article from "./Article/Article";
import NotFound from "./NotFound"
import Callback from "./Callback/Callback";
import UserProfile from "./UserProfile/UserProfile";
const App = () => (
        <Router>
            <div className="container">
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/article/:id" component={Article}/>
                    <Route exact path="/users" component={Users}/>
                    <Route path="/userprofile" component={UserProfile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/callback" component={Callback}/>
                    <Route path="/notfound" component={NotFound}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
);

export default App;