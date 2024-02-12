<template>
  <table v-if="essenceList.length" class="table">
    <thead>
      <tr>
        <td>Id сущности</td>
        <td>Название сущности</td>
      </tr>
    </thead>
    <tbody>
      <template v-for="essence in essenceList" :key="essence.id">
        <EssenceItem :essenceItem="essence" />
      </template>
    </tbody>
  </table>
  <div v-else class="table">
    <h2>Сущностей пока нет</h2>
  </div>
</template>

<script setup>
import { useEssenceStore } from '@/store/essenceStore';
import EssenceItem from './EssenceItem.vue';

const essenceStore = useEssenceStore()
const essenceList = essenceStore.createdEssence
</script>

<style> 
.table {
  min-width: 500px;
  min-height: 200px;
  background-color: #b5dcfb;
  padding: 30px;
  text-align: center;
}

.table thead td {
	font-weight: bold;
	text-align: center;
	border: none;
	padding: 10px 15px;
	background: #5db3f6;
}
.table thead tr td:first-child {
	border-radius: 8px 0 0 8px;
}
.table thead tr td:last-child {
	border-radius: 0 8px 8px 0;
}

.table tbody td {
	text-align: center;
	border: none;
	padding: 10px 15px;
	font-size: 18px;
	vertical-align: top;
}
.table tbody tr:nth-child(even){
	background: #93ccf9;
}
.table tbody tr td:first-child {
	border-radius: 8px 0 0 8px;
}
.table tbody tr td:last-child {
	border-radius: 0 8px 8px 0;
}
</style>
