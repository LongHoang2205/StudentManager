import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
} from "../../Constants/ReduxType";

export const getTodoRequestAction = (payload) => ({
  type: GET_TODO_REQUEST,
  payload,
});

export const getTodoSuccessAction = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});

export const getTodoFailureAction = (payload) => ({
  type: GET_TODO_FAILURE,
  payload,
});
