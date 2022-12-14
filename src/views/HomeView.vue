<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SimpleCard from "@/components/SimpleCard.vue";
import SimpleSelect from "@/components/SimpleSelect.vue";
import Pagination from "@/components/Pagination.vue";
import TaskList from "@/components/TaskList.vue";
import LoadSpinner from "@/components/LoadSpinner.vue";
// Data
const selectedUser = ref(null);
const disabled = ref(false);

// Computed
const store = useStore();
const posts = computed(() => store.getters["postsModule/loadPostList"]);
const users = computed(() => store.getters["usersModule/loadUserList"]);
const todos = computed(() => store.getters["usersModule/loadUserTasks"]);
const postsLoading = computed(() => store.state.postsModule.loading);
const tasksLoading = computed(() => store.state.usersModule.loading);
const router = useRouter();

// Methods
const userSelected = (user) => {
  disabled.value = true;
  store.dispatch("usersModule/getUserTasks", user.id);
  setTimeout(() => {
    disabled.value = false;
  }, 1500);
  selectedUser.value = user;
};

const goToPost = (postId) => {
  router.push({ name: "post", params: { id: postId } });
};

const goToUser = (userId) => {
  router.push({ name: "user", params: { id: userId } });
};

const updateTask = (task) => {
  task.status === "completed"
    ? (task.status = "pending")
    : (task.status = "completed");
  store.dispatch("usersModule/updateTask", task);
};
</script>

<template>
  <main>
    <div class="container pb-5">
      <div class="row mb-3 maintain-height">
        <h4 class="secondary">Latest Posts</h4>
        <div class="cards-container fade-in" v-show="!postsLoading">
          <SimpleCard
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :title="post.title"
            :body="post.body"
            :btn-label="`Read More`"
            @card-selected="goToPost(post.id)"
          />
        </div>
        <LoadSpinner v-show="postsLoading" />
        <div class="row" v-show="!postsLoading">
          <Pagination :pages="4" />
        </div>
      </div>
      <div class="row mb-3">
        <h4 class="secondary">User's Todos</h4>
        <div class="todos-container">
          <div class="user-selection">
            <SimpleSelect
              :options="users"
              :displayProperty="'name'"
              placeholder="Please select a User"
              @selection="userSelected"
            />
          </div>
          <div class="user-info fade-in" v-if="selectedUser">
            <SimpleCard
              :class="{ refresh: disabled }"
              :id="selectedUser.id"
              :user_id="selectedUser.id"
              :title="selectedUser.name"
              :body="selectedUser.email"
              :btn-label="`User Details`"
              @card-selected="goToUser(selectedUser.id)"
            >
              <ul class="list-unstyled">
                <li>{{ selectedUser.gender }}</li>
                <li>{{ selectedUser.status }}</li>
              </ul>
            </SimpleCard>
          </div>
          <div class="todos-list" v-show="!tasksLoading">
            <TaskList
              v-if="todos.length && selectedUser"
              :list="todos"
              :class="{ refresh: disabled }"
              @status-change="updateTask($event)"
            />
            <p v-if="!todos.length && selectedUser" class="text-center">
              No tasks for this user
            </p>
          </div>
          <LoadSpinner v-show="tasksLoading" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cards-container,
.todos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
}

.fade-in,
.refresh {
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
  .cards-container,
  .todos-container {
    display: grid;
    grid-gap: 1rem;
    overflow-y: hidden;
    padding: 1rem;
  }

  .cards-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    height: 320px;
  }

  .maintain-height {
    min-height: 320px;
  }

  .todos-container {
    grid-template-columns: minmax(250px, 30%) 1fr;
    grid-template-rows: auto 1fr;
    height: auto;

    .user-selection {
      grid-column: 1;
      grid-row: 1;
    }

    .user-info {
      grid-column: 1;
    }

    .todos-list {
      grid-column: 2;
    }

    .user-info,
    .todos-list {
      grid-row: 2;
    }
  }
}

.user-info li {
  text-transform: capitalize;
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
