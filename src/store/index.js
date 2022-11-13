import { createStore } from "vuex";
import postsModule from "./modules/posts-module.js";
import usersModule from "./modules/users-module.js";
const store = createStore({
  modules: {
    postsModule,
    usersModule,
  },
});

export default store;
