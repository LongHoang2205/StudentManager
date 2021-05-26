import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
} from "../../Constants/ReduxType";

const initialState = {
  todoList: [],
  todoError: null,
};

export default function (todo = initialState, action) {
  switch (action.type) {
    case GET_TODO_REQUEST:
      // trước khi gọi request để lấy data mới thì
      // clear data cũ
      return {
        todoList: [],
        todoError: null,
      };
    case GET_TODO_SUCCESS:
      // sẽ chạy sau khi response trả về
      // data truyền từ response sẽ nằm trong action như các redux khác
      const responseList = action.data;
      return {
        todoList: responseList,
        todoError: null,
      };
    case GET_TODO_FAILURE:
      const responseError = action.error;
      return {
        todoList: [],
        todoError: responseError,
      };
    default:
      return todo;
  }
}
