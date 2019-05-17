import axios from "axios";

const APIurl = process.env.REACT_APP_BACKEND_URL + "/user";

export const getUserProfil = id => axios.get(`${APIurl}/myProfile/${id}`);

export const editUser = (id, infoUser) =>
  axios.post(`${APIurl}/myProfile/edit/${id}`, infoUser);
