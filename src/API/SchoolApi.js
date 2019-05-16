import axios from "axios";

const APIUrl = `${REACT_APP_BACKEND_URL}/school`;

export const createNewSchool = infos => axios.post(`${APIurl}/create`, infos);

export const getAllSchools = () => axios.get(APIurl);

export const getParisSchools = parisId =>
  axios.get(`${APIurl}/paris/schools`, parisId);

export const getOneParisSchool = id =>
  axios.get(`${APIurl}/paris/schools/:id`, id);

export const getMiamiSchools = miamiId =>
  axios.get(`${APIurl}/miami/schools`, miamiId);

export const getOneMiamiSchool = id =>
  axios.get(`${APIurl}/miami/schools/:id`, id);

export const getSeoulSchools = seoulId =>
  axios.get(`${APIurl}/seoul/schools`, seoulId);

export const getOneSeoulSchool = id =>
  axios.get(`${APIurl}/seoul/schools/:id`, id);

export const editSchool = id => axios.post(`${APIurl}/edit/:id`, id);

export const deleteSchool = id => axios.delete(`${APIurl}/:id`, id);
