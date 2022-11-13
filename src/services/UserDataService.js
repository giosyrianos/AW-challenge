import http from "../http.common.js";

class UserDataService {
  getUsers() {
    return http.get("/users?page=1&per_page=20");
  }
}

export default new UserDataService();
