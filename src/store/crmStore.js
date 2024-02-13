import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCrmStore = defineStore('crmStore', () => {
  const baseDomain = ref('https://rmxtfurm45mw01.amocrm.ru/api/v4/')
  const accessToken = ref(process.env.VUE_APP_AMMO_ACCESS_TOKEN)

  async function createEssence(essenceInfo) {

    const newEssence = await axios({
      method: 'post',
      url: baseDomain.value + essenceInfo.value,
      headers: {
        'Authorization': 'Bearer ' + accessToken.value,
        'Contenttype': 'application/json'
      },
      data: {
        name: [essenceInfo.value]
      }
    })
    return await getEssenceById(newEssence.data._embedded[essenceInfo.value][0].id, essenceInfo.value)
  }

  async function getEssenceById(essenceId, essenceType) {
    const essence = await axios({
      method: 'get',
      url: baseDomain.value + essenceType + '/' + essenceId,
      headers: {
        'Authorization': 'Bearer ' + accessToken.value
      },
    })
    return essence.data
  }

  return {
    createEssence
  }
})