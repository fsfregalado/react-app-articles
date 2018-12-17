import {call, put, takeLatest} from 'redux-saga/effects'
import {
    FETCH_ARTICLES,
    ARTICLES_FETCH_SUCCEEDED,
    ARTICLES_FETCH_ERROR,
    FETCH_ARTICLE,
    ARTICLE_FETCH_SUCCEEDED,
    LOADING,
    ARTICLE_FETCH_ERROR,
    SEARCH_ARTICLES_FETCH_ERROR,
    SEARCH_ARTICLES_FETCH_SUCCEEDED,
    FETCH_ARTICLES_SEARCH,
    DELETE_ARTICLE,
    ARTICLE_DELETE_SUCCEEDED, ARTICLE_DELETE_ERROR, ARTICLE_ADD_SUCCEEDED, ARTICLE_ADD_ERROR, ADD_ARTICLE
} from '../constants/action-types'
import axios from 'axios';
import {ENDPOINT} from "../constants/services";

/*function fetchAll() {
    return fetch(ENDPOINT).then(response => response.json(), );
}*/

async function fetchAll() {
    const data = await fetch(`${ENDPOINT}/article`);
    const jsonData = await data.json();
    return jsonData;
}
async function fetchArt(id){
    let  articleData = await fetch(`${ENDPOINT}/article/${id}`);
    articleData = await articleData.json();
    return articleData;
}

async function fetchArtSearch(input) {
    let searchData = await fetch(`${ENDPOINT}/article?search=${input}`);
    searchData = await searchData.json();
    return searchData;
}

async function removeArticle(id){
    console.log(id);
    await axios.delete(`${ENDPOINT}/article/${id.id}`, {headers: { 'Accept': 'application/json',
            'Authorization': 'Bearer ' + id.token.access_token}});
}

async function postArticle(article) {
    const result = await axios.post(`${ENDPOINT}/article`, article, {headers: { 'Accept': 'application/json',
        'Authorization': 'Bearer ' + article.token.access_token}});
    return result.data;
}


// worker Saga: irá ser invocada quando ocorrer um FETCH_ARTICLES action
function* fetchArticles(){
    try {
        // invocar a função para obter a lista de artigos
        const articles = yield call(fetchAll);

        yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
        
    } catch (error) {
        // caso exista um erro, devolve a mensagem de erro
        yield put({type: ARTICLES_FETCH_ERROR, message: error.message});
    }
}



function* fetchArticle ({type, payload}){
    try{
        yield put({type: LOADING});
        const article = yield call(fetchArt, payload);
        if(article.error){
            yield put({type: ARTICLE_FETCH_ERROR, message: article.error});
        }else{
            yield put({type: ARTICLE_FETCH_SUCCEEDED, payload: article});
        }
    } catch(error){
        yield put({type: ARTICLE_FETCH_ERROR, message: error.message});
      
    }
}

function* fetchArticlesSearch ({type, payload}){
    try{
        yield put({type: LOADING});
        const articles = yield call(fetchArtSearch, payload);
        if(articles.error){
            yield put({type: SEARCH_ARTICLES_FETCH_ERROR, message: articles.error});
        }else{
            yield put({type: SEARCH_ARTICLES_FETCH_SUCCEEDED, payload: articles});
        }
    } catch(error){
        yield put({type: SEARCH_ARTICLES_FETCH_ERROR, message: error.message});

    }
}

function* deleteArticle ({type, payload}){
    try{
       yield call(removeArticle, payload);
       yield put({type: ARTICLE_DELETE_SUCCEEDED, payload});
    } catch(error){
        yield put({type: ARTICLE_DELETE_ERROR, message:error});
    }
}

function* addArticle ({type, payload}){
    try{
        const article = yield call(postArticle, payload);
        yield put({type: ARTICLE_ADD_SUCCEEDED, payload: article.data});
    }catch(error){
        console.log(error);
        yield put({type: ARTICLE_ADD_ERROR, message: error})
    }
}


/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/

function* mySagaArticles() {
    yield takeLatest(FETCH_ARTICLE, fetchArticle);
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
    yield takeLatest(FETCH_ARTICLES_SEARCH, fetchArticlesSearch);
    yield takeLatest(DELETE_ARTICLE, deleteArticle);
    yield takeLatest(ADD_ARTICLE, addArticle);
}

export default mySagaArticles;
