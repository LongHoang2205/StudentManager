import {
  GET_INFORMATION_REQUEST,
  GET_INFORMATION_SUCCESS,
  GET_INFORMATION_FAILURE,
} from "../../Constants/ReduxType";

const initialState = {
  informationList: [],
  informationError: null,
};

export default function (information = initialState, action) {
  switch (action.type) {
    case GET_INFORMATION_REQUEST:
      // trước khi gọi request để lấy data mới thì
      // clear data cũ
      return {
        informationList: [],
        informationError: null,
      };
    case GET_INFORMATION_SUCCESS:
      // sẽ chạy sau khi response trả về
      // data truyền từ response sẽ nằm trong action như các redux khác
      const responseList = action.data;
      return {
        informationList: responseList,
        informationError: null,
      };
    case GET_INFORMATION_FAILURE:
      const responseError = action.error;
      return {
        informationList: [],
        informationError: responseError,
      };
    default:
      return information;
  }
}
