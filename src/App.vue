<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("postsModule/getPosts");
  store.dispatch("usersModule/getUsers");
});
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1 class="text-info">
          <RouterLink to="/" class="text-info">My Dashboard</RouterLink>
        </h1>
      </div>
    </header>
    <RouterView style="min-height: 75vh" v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-width: 85vw;
}

// route transitions
.route-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.round-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

@media (min-width: 1024px) {
}
</style>
