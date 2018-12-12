// src/js/components/Signup/Signup.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../../actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = ({articles: {article, loading, error}}) => {
    return {article, loading, error};   
};

const mapDispatchToProps = dispatch => ({
    fetchArticle: id => dispatch(fetchArticle(id))
});

class Article extends Component{
    
    componentDidMount(){
        this.props.fetchArticle(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.loading && nextProps.error){
            this.props.history.push("../notfound");
        }
    }
        
    render() {
        const {article} = this.props;

        var content = "";

        if(this.props.loading) {return (
                content = (
                    <div className="tile is-child box notification is-info">
                        <p>Loading...</p>
                    </div>
                )
            )}
        else{
            content = (
                <div className="tile is-child box notification is-info">
                    <p className="title">{article.title}</p>
                    <p>{article.description}</p>
                    <br/>
                    <figure className="media-left">
                        <p className="image" style={{width: "50%"}}>
                            <img alt="articles" src={article.image}/>
                        </p>
                    </figure>
                </div>
            )
        }
        if(!this.props.loading && this.props.error) return <div>{this.props.error}</div>
        return (
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));