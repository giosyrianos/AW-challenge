<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SimpleCard from "@/components/SimpleCard.vue";
import Pagination from "@/components/Pagination.vue";

const store = useStore();
const posts = computed(() => store.getters["postsModule/loadPostList"]);
const router = useRouter();
// Methods
const goToPost = (postId) => {
  router.push({ name: "post", params: { id: postId } });
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-3">
        <h4 class="secondary">Latest Posts</h4>
        <div class="cards-container">
          <SimpleCard
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :title="post.title"
            :body="post.body"
            @selection="goToPost(post.id)"
          />
        </div>
        <div class="row">
          <Pagination :pages="4" />
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
  animation: fadeInAnimation ease 0.7s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

@media (min-width: 760px) {
  .cards-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    height: 320px;
    overflow-y: hidden;
    padding: 1rem;
  }
}

// Fade transition
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.8s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.8s ease-in;
}
</style>
