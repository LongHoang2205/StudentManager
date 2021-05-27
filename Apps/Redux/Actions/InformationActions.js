import {
  GET_INFORMATION_REQUEST,
  GET_INFORMATION_SUCCESS,
  GET_INFORMATION_FAILURE,
} from "../../Constants/ReduxType";

export const getInformationRequestAction = (payload) => ({
  type: GET_INFORMATION_REQUEST,
  payload,
});

export const getInformationSuccessAction = (payload) => ({
  type: GET_INFORMATION_SUCCESS,
  payload,
});

export const getInformationFailureAction = (payload) => ({
  type: GET_INFORMATION_FAILURE,
  payload,
});
