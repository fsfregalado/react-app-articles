import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_USERS, USERS_FETCH_SUCCEEDED, USERS_FETCH_ERROR} from '../constants/action-types'
import {ENDPOINT} from "../constants/services";

function fetchAll() {
    return fetch(`${ENDPOINT}/user`).then(response => response.json(), );
}

/*async function fetchAll() {
    const data = await fetch(ENDPOINT_USER);
    const jsonData = await data.json();
    return jsonData;
}*/

// worker Saga: irá ser invocada quando ocorrer um FETCH_ARTICLES action
function* fetchUsers(){
    try {
        // invocar a função para obter a lista de users
        const users = yield call(fetchAll);

        yield put({type: USERS_FETCH_SUCCEEDED, payload: users});
    } catch (error) {
        // caso exista um erro, devolve a mensagem de erro

        yield put({type: USERS_FETCH_ERROR, message: error.message});
    }
}



function* mySagaUsers() {
    yield takeLatest(FETCH_USERS, fetchUsers);
}

export default mySagaUsers;
