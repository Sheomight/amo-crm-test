import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCrmStore = defineStore('crmStore', () => {
  const baseDomain = ref('https://rmxtfurm45mw01.amocrm.ru/api/v4/')
  const accessToken = ref('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhjMjRlZDEyNjhmYzEyMjc4MzQ5ODdlMGQxOWU2Zjk1YmI4MTY3MTMyZGE2MTZlMDU2YzVhZTgyODM0NzVmOTEwZDI1ZDA1MmEyNDY2NTZlIn0.eyJhdWQiOiIxMmU3MjkyZi0zMmNhLTQ3MmMtYjI3Mi01NjVjYmI5ZTczMzciLCJqdGkiOiI4YzI0ZWQxMjY4ZmMxMjI3ODM0OTg3ZTBkMTllNmY5NWJiODE2NzEzMmRhNjE2ZTA1NmM1YWU4MjgzNDc1ZjkxMGQyNWQwNTJhMjQ2NjU2ZSIsImlhdCI6MTcwNzczNzY4NCwibmJmIjoxNzA3NzM3Njg0LCJleHAiOjE3MDc4MjQwODQsInN1YiI6IjcxMTI2MjkiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzE1NTA5ODYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiIxZTY2NzNiNy0zMmY3LTQ4NmUtODJjYi05NGE2Y2E5M2Q5YzQifQ.EFk6bYzs8_OjunN7T-UsmM8VCpDpOEeUwS7NSh_qUYkwtJzNS8THeUdkzgQ7beJrz-aPcSh7MbsO91nrlboY3JHoaAjGQ_046Zif1aEtCI3Js6FDQ8uLrlbqA4nwi_TOyTHy5n98b2tTa02nYVpYeZURzOJtnD4xg908WiD4-dTkAku0xqyZakrbTqusdz7ehVVcs6GrkmUpSn8PMLiwJl9Cbke6ytXlT-sP-NMvHL8HNx5zH77es8RgQiC-m-JjMuBOUbDNVXgf1Cwn5g6BAUI7DpsU96oxbp30i4s2ZdSrchEYsEbXwwNyB7oheQgxFpfTLCw5KwUhrSPevrVBYA')

  async function createEssence(essenceInfo) {

    const newEssence = await axios({
      method: 'post',
      url: baseDomain.value + essenceInfo.value,
      headers: {
        'Authorization': 'Bearer ' + accessToken.value,
        'Contenttype': 'application/json'
      },
      name: 'Perta',
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