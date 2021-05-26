import { combineReducers } from "redux";
import StudentReducer from "./StudentReducer";
import TodoReducer from "./TodoReducer";

export default combineReducers({
  student: StudentReducer,
  todo: TodoReducer,
});
