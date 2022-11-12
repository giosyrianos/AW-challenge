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
  <div>
    <header>
      <div class="wrapper">
        <h1 class="text-info">My Dashboard</h1>
        <div v-if="loading" class="spinner-border mx-auto text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      </div>
    </header>
    <RouterView v-if="!loading" style="min-height: 75vh" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-width: 85vw;
}
@media (min-width: 1024px) {
}
</style>
