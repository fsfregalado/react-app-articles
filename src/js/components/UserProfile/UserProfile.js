import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAuthor, deleteArticle} from "../../actions";
import {Link} from "react-router-dom";
import Form from '../Form';
import withAuth from "../../hocs/auth";

const mapStateToProps = state => {
    return {
        author: state.articles.author,
        token: state.articles.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthor: id => dispatch(fetchAuthor(id)),
        deleteArticle: id => dispatch(deleteArticle(id))
    };
};


class UserProfile extends Component {
    componentDidMount() {
        this.props.fetchAuthor(this.props.match.params.id);
    }

    deleteArticle = (id) => {
       this.props.deleteArticle({id, token: this.props.token});
    };

    render() {
        if(!this.props.author){
            return <p>Loading...</p>
        }

        return (
            <div>
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="tile is-vertical is-8">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <div className="tile is-child box notification is-info">
                                        <p className="title">User profile <span role="img" aria-label="Person">👤</span></p>
                                        <strong><label>Name: </label></strong>
                                        {this.props.author.name}
                                        <br/>
                                        <strong><label>Email: </label></strong>
                                        {this.props.author.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.props.isAuth() && this.props.user().id  == this.props.match.params.id && (
                            <div className="tile is-child">
                                <div className="tile is-parent">
                                    <div className="tile is-child box notification is-danger">
                                        <p className="title">Add a new article</p>
                                        <Form />
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className="tile is-ancestor">
                        <div className="tile is-8">
                            <div className="tile is-parent is-vertical">
                                <div className="tile is-child box notification is-warning">
                                    <p className="title">Articles from {this.props.author.name} 📖</p>
                                    {this.props.author.articles.length < 1 && <p>Sorry, but this author doesn't have articles 😔</p>}
                                    <ul className="list-group list-group-flush">
                                        {this.props.author.articles.map((el, index) => (
                                            // para cada item dentro da array articles, criar um título e um botão delete
                                            <li className="list-group-item level" style={{marginBottom: '2px'}} key={index}>
                                                <Link to={"/article/"+el.id}>{el.title}</Link>
                                                {this.props.isAuth() && this.props.user().id  == this.props.match.params.id &&
                                                <a onClick={this.deleteArticle.bind(this, el.id)} className="level-right" style={{color: 'black', textDecoration: 'none'}}>delete</a>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

    /*render(){
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
    }*/
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(UserProfile));