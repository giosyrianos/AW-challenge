<script setup>
import { ref } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  displayProperty: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["selection"]);

const selection = ref(null);

const selectionMade = () => {
  emit("selection", selection.value);
};
</script>

<template>
  <select
    class="form-select bg-secondary"
    aria-label="Default select example"
    style="width: 100%; color: #fff"
    @change="selectionMade()"
    v-model="selection"
  >
    <option disabled :value="null">{{ placeholder }}</option>
    <option :value="option" v-for="option in options" :key="option.id">
      {{ option[displayProperty] }}
    </option>
  </select>
</template>
