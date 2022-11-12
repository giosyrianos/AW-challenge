import http from "../http.common.js";

class PostDataService {
  getPosts(page) {
    return http.get(`/posts?page=${page}&per_page=4`);
  }

  getSinglePost(id) {
    return http.get(`/posts/${id}`);
  }
}

export default new PostDataService();
