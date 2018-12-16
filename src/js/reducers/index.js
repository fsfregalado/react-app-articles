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
    SEARCH_ARTICLES_FETCH_SUCCEEDED,
    AUTHOR_FETCH_SUCCEEDED, ARTICLE_DELETE_SUCCEEDED, ARTICLE_ADD_SUCCEEDED
} from "../constants/action-types";

const initialState = {
    articles: [],
    users: [],
    author: null,
    article: '',
    loading: true,
    token: '',
    user: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_ADD_SUCCEEDED:
            console.log("payload", action.payload);
            console.log("author", state.author.id);
            console.log("action", action.payload.user_id);

            if(state.author.id == action.payload.user_id){
                return { ...state, articles: [action.payload, ...state.articles], author: {...state.author, articles: [action.payload, ...state.author.articles]} };
            }else{
                return { ...state, articles: [action.payload, ...state.articles] };
            }

        case ARTICLE_DELETE_SUCCEEDED:
            if(state.author && state.author.articles.length > 0)
            {
                return {...state, articles: [...state.articles.filter((x) => x.id !== action.payload)], author: {...state.author, articles: [...state.author.articles.filter((x) => x.id !== action.payload)]}};
            }
            else{
                return {...state, articles: [...state.articles.filter((x) => x.id !== action.payload)]};
            }

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
            return { ...state, user: action.payload };

        case AUTHOR_FETCH_SUCCEEDED:
            return {...state, author: action.payload.data};


        default:
            return state;
    }
};
export default rootReducer;