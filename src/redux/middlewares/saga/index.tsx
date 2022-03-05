import {all, fork} from 'redux-saga/effects';
import generalSaga from './generalSaga';

function* rootSaga() {
  yield all([fork(generalSaga)]);
}

export default rootSaga;
