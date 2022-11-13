import UserDataService from "@/services/UserDataService";
import TasksDataService from "@/services/TasksDataService";

export default {
  namespaced: true,
  state() {
    return {
      userList: [],
      selectedUser: {},
      loading: false,
      singleUserloading: false,
      userTasks: [],
    };
  },

  actions: {
    async getUsers({ commit }) {
      commit("SET_LOADING", true);
      const response = await UserDataService.getUsers();
      commit("SET_LOADING", false);
      commit("SET_USERLIST", response.data);
    },
    async getUser({ commit }, id) {
      commit("SET_singleUser_LOADING", true);
      const response = await UserDataService.getUser(id);
      commit("SET_singleUser_LOADING", false);
      commit("SET_SELECTED_USER", response.data);
    },
    async getUserTasks({ commit }, id) {
      const response = await TasksDataService.getUserTasks(id);
      console.log(response.data);
      commit("SET_USER_TASKS", response.data);
    },
    // eslint-disable-next-line no-unused-vars
    async updateTask({ commit }, task) {
      console.log(task);
      const response = await TasksDataService.updateTask(task);
      console.log(response.data);
      // Backend DOES NOT update THE task
      // Pleace check the NETWORK tab in the browser devtools for verifycation
      // commit("UPDATE_TASK", response.data);
    },
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_singleUser_LOADING(state, payload) {
      state.singleUserloading = payload;
    },
    SET_USERLIST(state, userList) {
      state.userList = userList;
    },
    SET_USER_TASKS(state, userTasks) {
      state.userTasks = [...userTasks];
    },
    SET_SELECTED_USER(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
    // eslint-disable-next-line no-unused-vars
    UPDATE_TASK(state, task) {
      // const index = state.userTasks.findIndex((t) => t.id === task.id);
      // state.userTasks.splice(index, 1, task);
    },
  },

  getters: {
    loadUserList: (state) => state.userList,
    loadUserTasks: (state) => state.userTasks,
    loadSelectedUser: (state) => state.selectedUser,
  },
};
