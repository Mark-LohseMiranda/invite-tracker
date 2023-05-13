import axios from "axios";

//local
// const URL_PREFIX = "http://localhost:3001";
//delploy
const URL_PREFIX = "https://backend.mark-lohsemiranda.com:8443"

const API = {
  getNumbers: () => {
    return axios.get(`${URL_PREFIX}/api/gingerbread`);
  },

  findEmail: (email) => {
    return axios.put(`${URL_PREFIX}/api/gingerbread/email`, { email });
  },

  findGuest: (id) => {
    return axios.put(`${URL_PREFIX}/api/gingerbread/id`, { id });
  },

  update: (id, form) => {
    return axios.put(`${URL_PREFIX}/api/gingerbread?guest=${id}`, form);
  },
};

export default API;
