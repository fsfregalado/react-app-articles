import React, { Component } from "react";
import { connect } from "react-redux";
import {AUTH_ENDPOINT} from "../../constants/services";

const mapStateToProps = state => {
    return {
        user: state.articles.user,
    };
};


class ConnectedUserProfile extends Component {
    render(){
        var userLogged = "";

        if(this.props.user){
            userLogged = (
                <div className="tile is-child box notification is-primary">
                    <p className="title">User profile <span role="img" aria-label="Person">👤</span></p>
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
                    <p className="title">User profile <span role="img" aria-label="Person 2">👤</span></p>
                    <p><span role="img" aria-label="warning">⚠️</span> No user logged! Please <a href={AUTH_ENDPOINT}>login</a>  <span role="img" aria-label="warning 2">⚠️</span></p>
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