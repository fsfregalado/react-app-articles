import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import articles from "../reducers/index";

// importar os sagas da aplicação
//import mySagaArticles from '../sagas/articles';
import mySagas from '../sagas/sagas';

// inicializar o saga Middleware
const sagaMiddleware = createSagaMiddleware();

// criar a store do Redux
const store = createStore(
    // caso exista mais do que 1 reducer, usar esta função para "combiná-los"

    //articles: nome do reducer
    combineReducers({
        articles,
    }),
    // associar o saga à store do Redux
    //compose(
    applyMiddleware(sagaMiddleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //)
);

// executar o middleware sagas
sagaMiddleware.run(mySagas);

export default store;