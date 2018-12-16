// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapStateToProps = state => {
    return{
        token: state.articles.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, description } = this.state;
        this.props.addArticle({ title, description, token: this.props.token});
        this.setState({ title: "", description: "" });
    }

    render() {
        const { title, description } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className="label has-text-white">Title</label>
                    <input
                        type="text"
                        className="input"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <label className="label has-text-white">Descrição</label>
                    <input
                        type="text"
                        className="input"
                        id="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="button is-danger is-inverted">
                    Create
                </button>
            </form>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;