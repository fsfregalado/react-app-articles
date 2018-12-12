// src/js/components/App.js

import React from "react";
import List from "./List";
import Form from "./Form";
import SearchBar from "./SearchBar/SearchBar";


const Home = () => (
    <div>
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child box notification is-primary">
                            <p className="title">Articles 📖</p>
                            <SearchBar/>
                            <List/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tile is-child">
                <div className="tile is-parent">
                    <div className="tile is-child box notification is-danger">
                        <p className="title">Add a new article</p>
                        <Form />
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;