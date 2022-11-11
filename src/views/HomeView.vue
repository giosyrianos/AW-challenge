<script setup>
import SimpleCard from "@/components/SimpleCard.vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-3">
        <h4 class="secondary">Latest Posts</h4>
        <div class="cards-container">
          <SimpleCard v-for="index in 4" :key="index" />
        </div>
        <div class="row">
          <nav
            class="d-flex justify-content-center mt-2"
            aria-label="Page navigation example"
          >
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link bg-secondary text-light"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link bg-secondary text-light" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link bg-secondary text-light" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link bg-secondary text-light" href="#">3</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link bg-secondary text-light"
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
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
  justify-content: center;
	gap: 1.2rem;
}

@media (min-width: 760px) {
  .cards-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    height: 30vh;
    overflow-y: auto;
    padding: 1rem;
  }
}
</style>
