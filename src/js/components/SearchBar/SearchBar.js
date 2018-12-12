import React, { Component } from "react";
import {fetchArticlesSearch} from "../../actions";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = dispatch => {
    return {
        fetchArticlesSearch: (search) => dispatch(fetchArticlesSearch(search))
    };
};

const mapStateToProps = state => {
    return { articles: state.articles};
};


class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ""
        }
    }

    searchChanged = event => {
        let input = event.target.value;
        this.setState({
            searchTerm: input
        });

        this.props.fetchArticlesSearch(input);
    };

    render(){
        return(
            <input className="input" type="text" placeholder="search articles" style={{marginBottom: '1em'}} onChange={this.searchChanged}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);