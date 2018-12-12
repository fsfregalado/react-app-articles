import React, { Component } from "react";
import { connect } from "react-redux";
import {AUTH_ENDPOINT} from "../../constants/services";

const mapStateToProps = state => {
    return {
        user: state.articles.user,
    };
};


class ConnectedUserProfile extends Component {
    constructor(match){
        super(match);
    }

    render(){
        var userLogged = "";

        if(this.props.user){
            userLogged = (
                <div className="tile is-child box notification is-primary">
                    <p className="title">User profile 👤</p>
                    <strong><label>Name: </label></strong>
                    {this.props.user.name}
                    <br/>
                    <strong><label>Email: </label></strong>
                    {this.props.user.email}
                </div>
            );
        }else{
            userLogged = (
                <div className="tile is-child box notification is-primary">
                    <p className="title">User profile 👤</p>
                    <p>⚠️ No user logged! Please <a href={AUTH_ENDPOINT}>login</a>  ⚠️</p>
                </div>
            )
        }
        return(
            <div>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                {userLogged}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const UserProfile = connect(mapStateToProps)(ConnectedUserProfile);

export default UserProfile;