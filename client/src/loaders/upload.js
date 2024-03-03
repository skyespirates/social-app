import api from "../utils/api";
import { redirect } from "react-router-dom";

export const uploadAction = async ({ request }) => {
  const { file } = Object.fromEntries(await request.formData());
  const raw = JSON.parse(window.localStorage.getItem("persist:root"));
  const userId = JSON.parse(raw._id);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", userId);
  const { status } = await api("/uploads/excel", {
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
  if (status === 201) {
    return redirect("/tickets");
  }
  return false;
};
