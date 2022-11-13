<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const loading = computed(() => store.state.postsModule.singlePostloading);
const post = computed(() => store.getters["postsModule/loadSelectedPost"]);

onMounted(() => {
  console.log([post]);
  store.dispatch("postsModule/getPost", route.params.id);
});
</script>

<template>
  <div class="container">
    <div class="row single-post">
      <div class="col-12">
        <h4>Post</h4>
        <h2 class="text-light" v-if="!loading">{{ post.title }}</h2>
      </div>
      <div class="row">
        <div class="col-12" v-if="!loading">
          <p>{{ post.body }}</p>
        </div>
        <div v-if="loading" class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-post {
  max-width: 80vw;
  p {
    font-size: 1.2rem;
  }
}
</style>
