import {all, takeLatest} from 'redux-saga/effects'
import * as actionType from '../const/actionType'
import { getAllUser } from './userSaga'
export const rootSaga = function*() {
    yield all([
        takeLatest(actionType.GET_USER, getAllUser)
    ])
}