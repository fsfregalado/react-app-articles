// src/js/components/List.js

import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, fetchArticles, fetchUsers } from "../actions/index";
import { Link } from "react-router-dom";


const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

const mapStateToProps = state => {
    return { articles: state.articles};
};

class ConnectedList extends Component{
    constructor(){
        super();
    }


    componentDidMount()
    {
        // chamada inicial para ir buscar os artigos
        //meter verificação de ver se já tem articles
        if(!this.props.articles.articles || !this.props.articles.articles.length > 0 ){
            this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }
    }

    render()
    {
        const articles = this.props.articles.articles;
        const loading = this.props.articles.loading;

        var content = "";

        if(loading){
            content = (
                <p>Loading...</p>
            )
        }else{
            content = (
                <ul className="list-group list-group-flush">
                    {articles.map((el, index) => (
                        // para cada item dentro da array articles, criar um título e um botão delete
                        <li className="list-group-item" key={index}>
                            <Link to={"/article/"+el.id}>{el.title}</Link>
                        </li>
                    ))}
                </ul>
            )
        }

        return (
            <div>
                {content}
            </div>

        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;