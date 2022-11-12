import { createStore } from "vuex";
import PostDataService from "@/services/PostDataService";
//modules added here

const store = createStore({
  state() {
    return {
      postList: [],
      selectedPost: {},
      loading: false,
      singlePostloading: false,
    };
  },

  actions: {
    async getPosts({ commit }, page) {
      commit("SET_LOADING", true);
      const response = await PostDataService.getPosts(page);
      commit("SET_LOADING", false);
      commit("SET_POSTLIST", response.data);
    },

    async getPost({ commit }, id) {
      commit("SET_Single_LOADING", true);
      const response = await PostDataService.getSinglePost(id);
      commit("SET_Single_LOADING", false);
      console.log(response.data);
      commit("SET_SELECTED_POST", response.data);
    },
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_Single_LOADING(state, payload) {
      state.singlePostloading = payload;
    },
    SET_POSTLIST(state, postList) {
      state.postList = postList;
    },
    SET_SELECTED_POST(state, selectedPost) {
      state.selectedPost = selectedPost;
    },
  },

  getters: {
    loadPostList: (state) => state.postList,
    loadSelectedPost: (state) => state.selectedPost,
  },
});

export default store;
