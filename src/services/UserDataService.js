import http from "../http.common.js";

class UserDataService {
  getUsers() {
    return http.get("/users?page=1&per_page=20");
  }

  getUser(id) {
    return http.get(`/users/${id}`);
  }
}

export default new UserDataService();
