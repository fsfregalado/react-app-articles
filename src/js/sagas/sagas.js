import { fork } from 'redux-saga/effects';
import mySagaArticles from './articles';
import mySagaUsers from './users';
import tokenSaga from './auth';
import mySagaAuthors from "./authors";

export default function* rootSaga () {
    yield [
        fork(mySagaArticles), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(mySagaUsers),
        fork(tokenSaga),
        fork(mySagaAuthors)
    ];
}

