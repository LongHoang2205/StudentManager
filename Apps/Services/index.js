import { create } from "apisauce";

const api = create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodoApi = async () => {
  const response = await api.get("/todos");
  return response;
};
