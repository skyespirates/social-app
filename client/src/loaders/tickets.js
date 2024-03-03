import api from "../utils/api";

export const ticketsLoader = async () => {
  const raw = JSON.parse(window.localStorage.getItem("persist:root"));
  const userId = JSON.parse(raw._id);
  const { data } = await api.get("/uploads/tickets/user/" + userId);
  return data;
};

export const ticketLoader = async ({ params }) => {
  const { ticketId } = params;
  const { data } = await api.get(`/uploads/tickets/${ticketId}`);
  return data;
};
