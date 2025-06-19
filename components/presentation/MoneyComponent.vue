<template>
  <client-only>{{money}}</client-only>
</template>

<script setup lang="ts">
 import {useSettingsUser} from '~/store/useSettingsUser'
 import {currency} from '~/utils/Currency'
 import {storeToRefs} from 'pinia'

 const props = defineProps<{
   value: number;
 }>()

 const {userCurrency} = storeToRefs(useSettingsUser())

 const money = computed(() => {
   const newValue = props.value.toFixed(2).toString().replace('.', ",")
   return `${newValue} ${currency.find(item => item.value === userCurrency.value)?.currency}`
 })
</script>

<style scoped>

</style>