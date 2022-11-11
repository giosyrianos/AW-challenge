import { createStore } from "vuex";
import PostDataService from "@/services/PostDataService";
//modules added here

const store = createStore({
  state() {
    return {
      postList: [],
      selectedPost: {},
      loading: false,
    };
  },

  actions: {
    async getPosts({ commit }, page) {
      commit("SET_LOADING", true);
      const response = await PostDataService.getPosts(page);
      commit("SET_LOADING", false);
      console.log(response.data);
      commit("SET_POSTLIST", response.data);
    },
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_POSTLIST(state, postList) {
      state.postList = postList;
    },
  },

  getters: {
    loadPostList: (state) => state.postList,
  },
});

export default store;
