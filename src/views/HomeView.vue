<script setup>
import SimpleCard from "@/components/SimpleCard.vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-3">
        <h4 class="secondary">Latest Posts</h4>
        <div class="cards-container">
          <SimpleCard v-for="index in 10" :key="index" />
        </div>
      </div>
      <div class="row">
        <h4 class="secondary">My Todos</h4>
        <div>Todos here</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
