<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("card mounted");
});
</script>

<template>
  <div class="card bg-secondary bg-gradient p-1">
    <div class="card-body">
      <h5 class="card-title text-info">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="actions d-flex justify-content-end">
        <a href="#" class="btn btn-info shadow">Read More</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-text {
  color: #fff;
}
</style>
