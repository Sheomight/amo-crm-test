<template>
  <form class="form" @submit.prevent="submitHandler">
    <h1>Создать новую сущность</h1>
    <div class="form-group">
    <CustomSelect 
      class="form-select" 
      :options="essenceStore.essenceTypeList" 
      v-model="selectedEssence" 
    />
    <CustomButton 
      class="form-btn" 
      :isLoading="isLoading" 
      :disabled="selectedEssence == null"
      >
      Создать
    </CustomButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useEssenceStore } from '@/store/essenceStore'
import CustomButton from '@/components/app/CustomButton.vue';
import CustomSelect from '@/components/app/CustomSelect.vue';
import { useCrmStore } from '@/store/crmStore';

const essenceStore = useEssenceStore()
const crmStore = useCrmStore()
let selectedEssence = ref(null)
let isLoading = ref(false)

async function submitHandler() {
  isLoading.value = true
  const newEssence = await crmStore.createEssence(selectedEssence.value, crmStore.baseDomain, crmStore.accessToken)
  console.log(newEssence);
  essenceStore.createdEssence.push(newEssence)
  isLoading.value = false
}
</script>

<style>
.form {
  min-width: 500px;
  min-height: 200px;
  background-color: #b5dcfb;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.form-group {
  display: flex;
}

.form-select {
  margin-right: 20px;
}
</style>
