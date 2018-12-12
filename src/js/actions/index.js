// src/js/actions/index.js

import {ADD_ARTICLE, FETCH_ARTICLES, DELETE_ARTICLE, FETCH_USERS, FETCH_ARTICLE, FETCH_TOKEN, USER_FETCH_SUCCEEDED, FETCH_ARTICLES_SEARCH} from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = article => ({type: DELETE_ARTICLE, payload: article});

export const fetchArticles = () => ({type: FETCH_ARTICLES});

export const fetchUsers = () => ({type: FETCH_USERS});

export const fetchArticle = id => {
    return {type: FETCH_ARTICLE, payload: id}
};

export const fetchArticlesSearch = search => {
    return {type: FETCH_ARTICLES_SEARCH, payload: search}
};

export const fetchToken = token => {
    return {type: FETCH_TOKEN, payload: token}
};

export const fetchUserSuccess = user => {
    return{type: USER_FETCH_SUCCEEDED, payload: user}
};