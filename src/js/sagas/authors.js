import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_AUTHOR, AUTHOR_FETCH_SUCCEEDED, AUTHOR_FETCH_ERROR} from '../constants/action-types'
import axios from 'axios';
import {ENDPOINT} from "../constants/services";

async function getAuthor(id) {
    //return fetch( `${ENDPOINT}/user`).then(response => response.json(), );
    const author = await axios.get(`${ENDPOINT}/user/${id}`);
    return author.data;
}

// worker Saga: irá ser invocada quando ocorrer um FETCH_ARTICLES action
function* fetchAuthor({type, payload}){
    try {
        // invocar a função para obter a lista de users
        const author = yield call(getAuthor, payload);

        yield put({type: AUTHOR_FETCH_SUCCEEDED, payload: author});
    } catch (error) {
        // caso exista um erro, devolve a mensagem de erro

        yield put({type: AUTHOR_FETCH_ERROR, message: error.message});
    }
}



function* mySagaAuthors() {
    yield takeLatest(FETCH_AUTHOR, fetchAuthor);
}

export default mySagaAuthors;
