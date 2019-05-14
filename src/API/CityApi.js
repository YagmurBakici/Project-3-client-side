import axios from "axios";

const APIurl = "http://localhost:8883/city";

export const getAllcities = () => axios.get(APIurl);

export const deleteCity = id => axios.delete(`${APIurl}/:id`, id);
