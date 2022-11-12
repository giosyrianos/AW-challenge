<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const post = computed(() => store.getters.loadSelectedPost);

onMounted(() => {
  console.log([post]);
  store.dispatch("getPost", route.params.id);
});
</script>

<template>
  <div class="container">
    <div class="row single-post">
      <div class="col-12">
        <h4>Post</h4>
        <h2 class="text-light">{{ post.title }}</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <p>{{ post.body }}</p>
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
