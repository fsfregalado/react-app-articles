// src/js/components/Login/Login.js

import React from "react";
import './Login.css'

const Login = () => (
    <div className="login">
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-4">
                <div className="tile" style={{textAlign: 'center'}}>
                    <article className="tile is-child notification is-primary">
                        <p className="title">Login</p>
                    </article>
                </div>
                <div className="tile" style={{marginTop: '0.8em'}}>
                    <article className="tile is-child notification" style={{border: '#23D160'}}>
                        <div className="field">
                            <p className="control">
                                <input className="input" type="email" placeholder="Email"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <input className="input" type="password" placeholder="Password"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-primary">
                                    Login
                                </button>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
);

export default Login;