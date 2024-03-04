import api from "../utils/api";
export const postsLoader = async () => {
  const { data, status } = await api.get("/posts");
  if (status !== 200) {
    throw new Error("something went wrong");
  }
  return data;
};

export const postLoader = async ({ params }) => {
  const { postId } = params;
  const { data, status } = await api.get(`/posts/${postId}`);
  if (status !== 200) {
    throw new Error("something went wrong");
  }
  return data;
};

export const postAction = async ({ params, request }) => {
  const { postId } = params;
  const { comment } = Object.fromEntries(await request.formData());

  return true;
};
