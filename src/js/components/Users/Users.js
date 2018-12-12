// src/js/components/Users.js

import React from "react";
import ListUsers from './ListUsers';


const Users = () => (
    <div>
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child box notification is-warning">
                            <p className="title">Users 👥</p>
                            <ListUsers/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Users;