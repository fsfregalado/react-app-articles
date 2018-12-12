import {call, put, takeLatest} from 'redux-saga/effects'
import {
    FETCH_ARTICLES,
    ARTICLES_FETCH_SUCCEEDED,
    ARTICLES_FETCH_ERROR,
    FETCH_ARTICLE,
    ARTICLE_FETCH_SUCCEEDED,
    LOADING,
    ARTICLE_FETCH_ERROR,
    SEARCH_ARTICLES_FETCH_ERROR, SEARCH_ARTICLES_FETCH_SUCCEEDED, FETCH_ARTICLES_SEARCH
} from '../constants/action-types'
import {ENDPOINT_ARTICLE} from "../constants/services";

/*function fetchAll() {
    return fetch(ENDPOINT).then(response => response.json(), );
}*/

async function fetchAll() {
    const data = await fetch(ENDPOINT_ARTICLE);
    const jsonData = await data.json();
    return jsonData;
}
async function fetchArt(id){
    let  articleData = await fetch(`${ENDPOINT_ARTICLE}/${id}`);
    articleData = await articleData.json();
    return articleData;
}

async function fetchArtSearch(input) {
    let searchData = await fetch(`${ENDPOINT_ARTICLE}/?search=${input}`);
    searchData = await searchData.json();
    return searchData;
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
        console.log("chegou aqui 2", payload);
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

/*
  Utilizar a função takeLatest para evitar multiplas chamadas à API
  Caso ocorram múltiplas chamadas irá ignorar todas à excepção da última
*/

function* mySagaArticles() {
    yield takeLatest(FETCH_ARTICLE, fetchArticle);
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
    yield takeLatest(FETCH_ARTICLES_SEARCH, fetchArticlesSearch);
}

export default mySagaArticles;
