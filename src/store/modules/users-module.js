import UserDataService from "@/services/UserDataService";

export default {
  namespaced: true,
  state() {
    return {
      userList: [],
      selectedUser: {},
      loading: false,
    };
  },

  actions: {
    async getUsers({ commit }) {
      commit("SET_LOADING", true);
      const response = await UserDataService.getUsers();
      commit("SET_LOADING", false);
      commit("SET_USERLIST", response.data);
      console.log(response.data);
    },
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_USERLIST(state, userList) {
      state.userList = userList;
    },
  },

  getters: {
    loadUserList: (state) => state.userList,
  },
};
