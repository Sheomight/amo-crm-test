<template>
  <div class="content">
    <CreationForm />
    <EssenceList />
  </div>

</template>

<script setup>
import CreationForm from '@/components/CreationForm.vue'
import EssenceList from './components/EssenceList.vue';
</script>

<style>
* {
  box-sizing: border-box;
}

.content {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
