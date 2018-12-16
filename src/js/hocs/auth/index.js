import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function withAuth(WrappedComponent) {
    class AuthHOC extends Component {
        constructor(props) {
            super(props);
            this.requireAuth = this._requireAuth.bind(this);
            this.isAuth = this._isAuth.bind(this);
            this.user = this._user.bind(this);
        }

        render() {
            const props = {
                ...this.props,
                requireAuth: this.requireAuth,
                isAuth: this.isAuth,
                user: this.user
            };
            return <WrappedComponent {...props} />;
        }

        _requireAuth() {
            if (!this._isAuth()) {
                this.props.history.push("/");
            }
        }

        _isAuth() {
            return this.props.user != null;
        }

        _user(){
            return this.props.user;
        }
    }


    const mapStateToProps = ({articles: {user}}) => ({user});

    return withRouter(connect(mapStateToProps)(AuthHOC));
}

export default withAuth;