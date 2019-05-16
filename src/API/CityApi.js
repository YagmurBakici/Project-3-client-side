import axios from "axios";

const APIurl = `${REACT_APP_BACKEND_URL}/city`;

export const getAllcities = () => axios.get(APIurl);

export const deleteCity = id => axios.delete(`${APIurl}/:id`, id);
