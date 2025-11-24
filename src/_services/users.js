import { API } from "../_api";

export const getUsers = async () => {
  const { data } = await API.get("/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data.data;
};

export const deleteUser = async (id) => {
  const { data } = await API.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return data;
};
