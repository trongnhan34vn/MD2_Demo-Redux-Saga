import {createStore, applyMiddleware} from './redux'
import createMiddleware from 'redux-saga'
import { rootSaga } from '../saga'
import rootReducer from '../redux/reducer'


// Tạo đối tượng Middleware

const sagaMiddleware = createMiddleware()

// Cấu hình srore chấp nhận saga middle ware

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store