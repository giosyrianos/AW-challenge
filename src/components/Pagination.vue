<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  pages: {
    type: Number,
    required: true,
  },
});

const store = useStore();
const currentPage = computed(() => store.getters["postsModule/currentPage"]);

const goToPage = (page) => {
  store.dispatch("postsModule/goToPostPage", page);
};
</script>

<template>
  <nav
    class="d-flex justify-content-center mt-2"
    aria-label="Page navigation example"
  >
    <ul class="pagination">
      <li class="page-item" v-for="(page, index) in pages" :key="index">
        <a
          href="#"
          :class="{ 'bg-info': currentPage === page }"
          class="page-link bg-secondary text-light"
          @click="goToPage(page)"
          >{{ page }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<style></style>