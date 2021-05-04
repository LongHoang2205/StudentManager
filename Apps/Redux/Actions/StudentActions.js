import { ADD_STUDENT, EDIT_STUDENT, REMOVE_STUDENT } from "./type";

export const addStudent = (payload) => ({
  type: ADD_STUDENT,
  payload,
});

export const editStudent = (payload) => ({
  type: EDIT_STUDENT,
  payload,
});

export const removeStudent = (payload) => ({
  type: REMOVE_STUDENT,
  payload,
});
