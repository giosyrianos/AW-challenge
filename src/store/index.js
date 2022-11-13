import { createStore } from "vuex";
import postsModule from "./modules/posts-module.js";
const store = createStore({
  modules: {
    postsModule,
  },
});

export default store;
