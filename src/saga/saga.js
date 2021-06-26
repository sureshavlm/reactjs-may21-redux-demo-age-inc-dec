import { AGE_UP } from "../actions";
import { put, takeLatest, delay } from 'redux-saga/effects';

/* event handler for  AGE_UP
*/
function* ageAsyncUp() {
    //simulate async call
    yield delay(4000); //dealy by 4 secs
    yield put({ type: 'AGE_UP_ASYNC', value: 1 }); //dispatch an even from React Saga
}

/*
    Saga provides you generated functions to create watchers
    for all your actions which you want handle it in middleware
*/
export default function* watchAgeUp() {
    yield takeLatest(AGE_UP, ageAsyncUp); //consider the latest event for the same type of event
}