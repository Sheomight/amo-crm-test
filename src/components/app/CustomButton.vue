<template>
  <button 
  class="btn" 
  :class="{
    'btn-loading': props.isLoading
  }"
  >
    <TheLoader v-if="props.isLoading"/>
    <slot v-else></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import TheLoader from './TheLoader.vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
  .btn {
    min-height: 40px;
    padding: 0 20px;
    background-color: #4783e3;
    color: #fff;
    border: 1px solid #1850ac;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #2974ed;
  }
  .btn:active {
    background-color: #1850ac;
  }
  .btn:disabled {
    background-color: #b5cdfb;
    color: #000;
    border: 1px solid #93ccf9;
    cursor: not-allowed;
  }

  .btn-loading {
    width: 50px;
    height: 50px;
    padding: 5px;
  }
</style>