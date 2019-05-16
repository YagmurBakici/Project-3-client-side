import axios from "axios";

const APIurl = process.env.REACT_APP_BACKEND_URL + "/housing";

export const createNewHouse = infos => axios.post(`${APIurl}/create`, infos);

export const getAllHouse = () => axios.get(APIurl);

export const getParisHouse = parisId =>
  axios.get(`${APIurl}/paris/houses`, parisId);

export const getOneParisHouse = id =>
  axios.get(`${APIurl}/paris/houses/:id`, id);

export const getMiamiHouse = miamiId =>
  axios.get(`${APIurl}/miami/houses`, miamiId);

export const getOneMiamiHouse = id =>
  axios.get(`${APIurl}/miami/houses/:id`, id);

export const getSeoulHouse = seoulId =>
  axios.get(`${APIurl}/seoul/houses`, seoulId);

export const getOneSeoulHouse = id =>
  axios.get(`${APIurl}/seoul/houses/:id`, id);

export const editHouse = id => axios.post(`${APIurl}/edit/:id`, id);

export const deleteHouse = id => axios.delete(`${APIurl}/:id`, id);
