import { combineReducers } from "redux";
import StudentReducer from "./StudentReducer";
import TodoReducer from "./TodoReducer";
import InformationReducer from "./InformationReducer";

export default combineReducers({
  student: StudentReducer,
  todo: TodoReducer,
  information: InformationReducer,
});
