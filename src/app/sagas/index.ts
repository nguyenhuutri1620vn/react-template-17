import { all, put, fork } from 'redux-saga/effects';
import * as nameActList from '#root/app/app/consts';
function* initialSaga() {
  yield put({ type: nameActList.INIT_DATA });
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(initialSaga)]);
}
