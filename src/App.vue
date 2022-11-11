<script setup>
import { computed, onMounted } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const loading = computed(() => store.state.loading);

onMounted(() => {
  store.dispatch("getPosts");
});
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="text-info">My Dashboard</h1>
      <div v-if="loading" class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <div class="container"></div>
  <RouterView v-if="!loading" />
</template>

<style scoped lang="scss">
.wrapper {
}

@media (min-width: 1024px) {
}
</style>
