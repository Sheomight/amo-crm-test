<template>
  <select v-model="selectedItem" class="select">
    <option class="select-item" :value="null" disabled>Не выбрано</option>
    <option class="select-item" v-for="option in props.options" :key="option.value" :value="option">{{ option.text }}</option>
  </select>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  options: {
    type: [Array, Object],
    required: true
  },
})

let selectedItem = ref(null)
</script>


<style scoped>
  .select {
    min-width: 200px;
    min-height: 50px;
    padding: 5px;
    border: 1px solid #42a6f5;
    cursor: pointer;
    background-color: #78bff8;
    color: #000;
  }

  .select:active,
  .select:focus {
    outline: 1px solid #2196f3;
  }

  .select-item:disabled {
    color: black;
  }
</style>
