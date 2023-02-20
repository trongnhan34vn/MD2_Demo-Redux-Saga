import call from 'redux-saga/effects'
import { GET_USER } from '../API/userService'

export function* getAllUser() {
    // gọi axios USER_GET, nhận kết quả trả về
    let listUsers = yield call(GET_USER)
}