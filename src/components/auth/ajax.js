import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    });
  }

  signup = infos => {
    return this.service
      .post("/auth/signup", infos)
      .then(response => response.data);
  };

  login = (mail, password) => {
    return this.service
      .post("/auth/login", { mail, password })
      .then(response => response.data);
  };

  logout = () => {
    return this.service
      .post("/auth/logout", {})
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/auth/loggedin").then(response => response.data);
  };
}

export default AuthService;
