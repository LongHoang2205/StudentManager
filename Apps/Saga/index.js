import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
} from "../Constants/ReduxType";
import { put, takeEvery } from "redux-saga/effects";

// api
import { getTodoApi } from "../Services";

function* fetchTodoList() {
  try {
    // gọi request gettodoapi
    const response = yield getTodoApi();

    // nếu trả về 200 thì dispatch get todo success
    // nếu trả về mã khác thì get todo thất bại (mã lỗi khác 404, 403, ....)
    if (response.status === 200) {
      // sau khi lấy thành công, truyền vào data đã lấy cho redux type thành công (reducer xử lí)
      yield put({ type: GET_TODO_SUCCESS, data: response.data });
    } else {
      yield put({ type: GET_TODO_FAILURE, error: "that bai" });
    }
  } catch (e) {
    yield put({ type: GET_TODO_FAILURE, error: "that bai" });
  }
}

// chạy root saga
// tìm ReduxType tương ứng
function* rootSaga() {
  yield takeEvery(GET_TODO_REQUEST, fetchTodoList);
}

export default rootSaga;
