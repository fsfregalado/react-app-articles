// src/js/components/Signup/Signup.js

import React from "react";

const Signup = () => (
    <div className="login">
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-4">
                <div className="tile" style={{textAlign: 'center'}}>
                    <article className="tile is-child notification is-info">
                        <p className="title">Sign up</p>
                    </article>
                </div>
                <div className="tile" style={{marginTop: '0.8em'}}>
                    <article className="tile is-child notification" style={{border: '#23D160'}}>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Your name"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="example@example.com" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <p className="control">
                                <input className="input" type="password" placeholder="Password"/>
                            </p>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link is-info">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-text">Cancel</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
);

export default Signup;