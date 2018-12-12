// src/js/reducers/index.js

import {
    ADD_ARTICLE,
    ARTICLES_FETCH_SUCCEEDED,
    DELETE_ARTICLE,
    USERS_FETCH_SUCCEEDED,
    ARTICLE_FETCH_SUCCEEDED,
    ARTICLE_FETCH_ERROR,
    LOADING,
    TOKEN_FETCH_SUCCEEDED,
    USER_FETCH_SUCCEEDED,
    SEARCH_ARTICLES_FETCH_SUCCEEDED
} from "../constants/action-types";

const initialState = {
    articles: [],
    users: [],
    article: '',
    loading: true,
    token: '',
    user: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };

        case DELETE_ARTICLE:
            return {...state, articles: [...state.articles.filter((x) => x !== action.payload)]};

        case ARTICLES_FETCH_SUCCEEDED:
            return { ...state, articles: [...state.articles, ...action.payload], loading: false };

        case SEARCH_ARTICLES_FETCH_SUCCEEDED:
            return {...state, articles: [state.articles, ...action.payload], loading: false};

        case USERS_FETCH_SUCCEEDED:
            return {...state, users: [...state.users, ...action.payload], loading: false};

        case ARTICLE_FETCH_SUCCEEDED:
            return {...state, article: action.payload, error: '',  loading: false };

        case ARTICLE_FETCH_ERROR: 
            return {...state, error: action.message, loading: false };

        case LOADING: 
            return {
                ...state,
                loading: true
              };

        case TOKEN_FETCH_SUCCEEDED:
            return { ...state, token: action.payload };

        case USER_FETCH_SUCCEEDED:
              console.log('chegou o user', action.payload);
            //console.log('user: ', action.payload);
            return { ...state, user: action.payload };

        default:
            return state;
    }
};
export default rootReducer;