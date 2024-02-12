<template>
  <tr>
    <td>{{ props.essenceItem.id }}</td>
    <td>{{ props.essenceItem.name }}</td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  essenceItem: {
    type: Object,
    required: true
  }
})
</script>

