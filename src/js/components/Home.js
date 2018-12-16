// src/js/components/App.js

import React from "react";
import List from "./List";
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
        </div>
    </div>
);

export default Home;