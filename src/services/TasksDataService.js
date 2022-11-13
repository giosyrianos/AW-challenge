import http from "../http.common.js";

class TasksDataService {
  getUserTasks(userId) {
    return http.get(`/users/${userId}/todos`);
  }

  updateTask(task) {
    return http.put(`/todos/${task.id}`, task);
  }
}

export default new TasksDataService();
