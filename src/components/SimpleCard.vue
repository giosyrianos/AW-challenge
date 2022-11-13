<script setup>
import { onMounted } from "vue";
// Props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  btnLabel: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: false,
  },
});

// Emits
const emit = defineEmits(["selection"]);

// Methods
const onSelection = () => {
  emit("card-selected");
};

onMounted(() => {
  // console.log("card mounted");
});
</script>

<template>
  <div class="card bg-secondary bg-gradient p-1">
    <div class="card-body">
      <h5
        class="card-title text-info fade2"
        :class="{ 'text-overflow': title.length > 50 }"
      >
        {{ title }}
      </h5>
      <p
        class="card-text fade2"
        :class="{ 'text-overflow': body.length > 200 }"
      >
        {{ body }}
      </p>
      <slot />
      <div class="actions d-flex justify-content-end">
        <button href="#" class="btn btn-info shadow" @click="onSelection()">
          {{ btnLabel }}
        </button>
        <!-- <router-link :to="append($route.path,'')" tag="button">foo</router-link> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-text {
  color: #fff;
}

.text-overflow {
  --lh: 1.4rem;
  line-height: var(--lh);
  --max-lines: 5;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem; /* space for ellipsis */

  &.card-title {
    --max-lines: 3;
  }

  &::before {
    position: absolute;
    content: "...";
    bottom: 0;
    right: 0px;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 1rem;
    height: 1rem;
  }
}

.actions {
  margin-top: 2rem;
}
</style>
