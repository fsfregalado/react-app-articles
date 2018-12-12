// src/js/components/List.js

import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchUsers} from "../../actions/index";

const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

const mapStateToProps = state => {
    return { articles: state.articles };
};

class ConnectedList extends Component{
    constructor(){
        super();
        this.state = {
            loading: false,
        }
    }

    componentDidMount()
    {
        console.log("hello");
        // chamada inicial para ir buscar os users
        //meter verificação de ver se já tem users
        if(!this.props.articles.users || !this.props.articles.users.length > 0 ){
            this.props.fetchUsers({type: 'FETCH_USERS'});
        }
    }

    render()
    {
        console.log(this.props.articles);
        const users = this.props.articles.users;
        const loading = this.props.articles.loading;

        var content = "";

        if(loading){
            content = (
                <p>Loading...</p>
            )
        }else{
            content = (
                <ul className="list-group list-group-flush">
                    {users.map((el, index) => (
                        // para cada item dentro da array articles, criar um título e um botão delete
                        <li className="list-group-item" key={index}>
                            {el.name}
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