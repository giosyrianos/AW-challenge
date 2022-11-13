<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const loading = computed(() => store.state.usersModule.singleUserloading);
const user = computed(() => store.getters["usersModule/loadSelectedUser"]);

onMounted(() => {
  store.dispatch("usersModule/getUser", route.params.id);
});
</script>

<template>
  <div class="container">
    <div class="row single-user">
      <div class="col-12">
        <h4 class="d-flex w-100 justify-content-between">
          User details
          <button class="btn btn-outline-secondary" @click="$router.push('/')">
            🏠
          </button>
        </h4>
        <h2 class="text-light" v-if="!loading">{{ user.name }}</h2>
      </div>
      <div class="row">
        <div class="col-12" v-if="!loading">
          <p>{{ user.email }}</p>
          <p>{{ user.gender }}</p>
          <p>{{ user.status }}</p>
        </div>
        <div v-if="loading" class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-user {
  max-width: 80vw;
  p {
    font-size: 1.2rem;
  }
}
</style>
