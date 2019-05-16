import axios from "axios";

const APIurl = process.env.REACT_APP_BACKEND_URL + "/city";

export const getAllcities = () => axios.get(APIurl);

export const deleteCity = id => axios.delete(`${APIurl}/:id`, id);
