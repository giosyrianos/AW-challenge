<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="text-primary">My Dashboard</h1>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.wrapper {

}

@media (min-width: 1024px) {
}
</style>
