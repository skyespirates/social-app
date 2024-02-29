export const useAuth = () => {
  const user = JSON.parse(localStorage.get("user"));
  return user;
};
