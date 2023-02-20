import users from "./reducer/users";
import students from "./reducer/students";
import combineReducers from "./reducer/combineReducers";

const rootReducer = combineReducers(users, students)