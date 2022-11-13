import PostDataService from "@/services/PostDataService";

export default {
  namespaced: true,
  state() {
    return {
      postList: [],
      selectedPost: {},
      loading: false,
      singlePostloading: false,
      postPage: 1,
    };
  },

  actions: {
    async getPosts({ commit }) {
      commit("SET_LOADING", true);
      const response = await PostDataService.getPosts(this.state.postPage);
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
		async goToPostPage({ commit }, page) {
			console.log('goToPostPage', page)
      commit("SET_POST_PAGE", page);
      this.dispatch("postsModule/getPosts");
    },
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_Single_LOADING(state, payload) {
      state.singlePostloading = payload;
    },
    SET_POST_PAGE(state, payload) {
      state.postPage = payload;
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
    currentPage: (state) => state.postPage,
  },
};
