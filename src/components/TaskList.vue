<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["status-change"]);

const modifyDate = (date) => {
  const d = new Date(date);
  return d.toLocaleString();
};

const isCompleted = (task) => {
  return task.status === "completed";
};

const onStatusChange = (task) => {
  emit("status-change", task);
};
</script>

<template>
  <ul class="list-group fade-in">
    <li
      class="list-group-item list-group-item-action bg-secondary"
      v-for="task in list"
      :key="task.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 text-info fw-bold w-80">{{ task.title }}</h5>
        <small class="text-white w-20">ID: {{ task.id }}</small>
      </div>
      <p class="mb-1 text-white">
        Due date:
        <span class="text-warning">
          {{ modifyDate(task.due_on) }}
        </span>
      </p>

      <div class="d-flex w-100 justify-content-between">
        <small
          :class="{
            'text-white': isCompleted(task),
            'bg-primary ': isCompleted(task),
            'text-black': !isCompleted(task),
            'bg-warning': !isCompleted(task),
          }"
          class="rounded-pill p-2"
          >{{ task.status }}
        </small>
        <input
          class="form-check-input"
          type="checkbox"
          style="width: 1.5rem; height: 1.5rem"
          value=""
          id="flexCheckDefault"
          :checked="isCompleted(task)"
          @change="onStatusChange(task)"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
small.w-20 {
  text-align: right;
  min-width: 55px;
}
.fade-in {
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
</style>
