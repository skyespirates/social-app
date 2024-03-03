import api from "../utils/api";
export const postsLoader = async () => {
  const { data, status } = await api.get("/posts");
  if (status !== 200) {
    throw new Error("something went wrong");
  }
  return data;
};
