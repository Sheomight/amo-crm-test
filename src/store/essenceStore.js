import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useEssenceStore = defineStore('essenceStore', () => {
  const essenceTypeList = reactive([
    {
      value: 'leads',
      text: 'Сделка'
    },
    {
      value: 'contacts',
      text: 'Контакт'
    },
    {
      value: 'companies',
      text: 'Компания'
    }
  ])

  const createdEssence = ref([])

  return {
    essenceTypeList, 
    createdEssence, 
  }
})