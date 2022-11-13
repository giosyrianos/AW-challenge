import http from "../http-common.js";

class TodoDataService {
  getUserTodos(userId) {
    return http.get(`/todos?userId=${userId}`);
  }
}
