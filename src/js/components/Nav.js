// src/js/components/App.js

import React, { Component } from "react";
import { NavLink , withRouter} from "react-router-dom";
import './Nav.css'
import { connect } from "react-redux";
import {AUTH_ENDPOINT, REGISTER_ENDPOINT} from "../constants/services";


const mapStateToProps = state => {
    return {
        user: state.articles.user,
    };
};


class ConnectedNav extends Component {
    render(){
        var loginBtn = "";
        if(this.props.user){
            loginBtn = (
                <div className="nav__rgt">
                    <div className="tabs">
                        <NavLink to="/userprofile">{this.props.user.name}</NavLink>
                    </div>
                </div>
            )
        }else{
            loginBtn = (
                <div className="nav__rgt">
                    <a className="button is-primary" href={REGISTER_ENDPOINT}>Sign up</a>
                    <a href={AUTH_ENDPOINT} className="button is-primary">Login</a>
                </div>
            )           
        }
        return(
            <div className="nav">
                <div className="nav__lft">
                    <div className="tabs">
                        <NavLink className="navbar-item" exact to="/">Articles</NavLink>
                        <NavLink className="navbar-item" to="/users/">Users</NavLink>
                    </div>
                    </div>
                    {loginBtn}
            </div>
        )
    }
}

const Nav = connect(mapStateToProps)(ConnectedNav);

export default withRouter(Nav);



