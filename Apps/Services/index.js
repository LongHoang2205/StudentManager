import { create } from "apisauce";

const api = create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
const apiInformation = create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // baseURL: "https://cat-fact.herokuapp.com",
});

export const getTodoApi = async () => {
  const response = await api.get("/todos");
  return response;
};
export const getInformationApi = async () => {
  // const response = await apiInformation.get("/facts");
  const response = await apiInformation.get("/users");
  return response;
};
