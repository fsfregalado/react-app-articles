import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchToken, fetchUserSuccess} from "../../actions/index"
import store from "../../store";
import {AUTH_USER_ENDPOINT} from "../../constants/services";

const mapDispatchToProps = dispatch => {
    return {
        fetchToken: code => dispatch(fetchToken(code)),
        fetchUser: user => dispatch(fetchUserSuccess(user)),
    };
};

const mapStateToProps = state => {

    return {
        token: state.articles.token,
        user: state.articles.user,
    };
};

class ConnectedCallback extends Component{

    constructor(match) {
        super(match);
        this.checkToken = this.checkToken.bind(this);
    }

    componentDidMount()
    {


       if(!this.props.token.length > 0)
        {
            // obter o code a partir do URL
            let code = this.props.location.search.substr(6);

            // invocar o pedido para pedir o novo token a partir do code obtido
            this.props.fetchToken(code);
        }

        // verificar alterações à store
        store.subscribe(this.checkToken);
    }


    checkToken()
    {
        if(store.getState().articles.token)
        {   

            if(!store.getState().articles.user)
            {
                fetch(AUTH_USER_ENDPOINT, {
                    headers: new Headers({'Authorization': store.getState().articles.token.token_type + ' ' +  store.getState().articles.token.access_token})
                }).then(response => response.json()).then((responseData) => {
                    this.props.fetchUser(responseData);
                });
            }
        }
    }

    render() {
        if (this.props.user)
        {
            this.props.history.push("/");
            return (
                <div>
                    <p>{this.props.user.name}</p>
                </div>
            );

        }
        else
        {
            return (
                <section className="section">
                    <div className="container">
                        <h1 className="title">️Wait a moment ⏱️</h1>
                        <h2 className="subtitle">
                            We're working on your profile! Wait a moment
                        </h2>
                    </div>
                </section>
            );
        }

    }
}

const Callback = connect(mapStateToProps, mapDispatchToProps)(ConnectedCallback);

export default Callback;