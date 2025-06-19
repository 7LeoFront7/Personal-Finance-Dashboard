<template>
  <header class="flex items-center h-16 justify-between w-full glass-header">
    <!-- остальное содержимое без изменений -->
    <NuxtLink class="font-bold text-primary text-2xl" to="/">Personal Finance Dashboard</NuxtLink>
    <div class="flex items-center gap-12">
      <div class="flex items-center gap-4">
        Общий счёт: <money-component :value="overallPortfolio"/>
        <el-select
            v-model="value"
            placeholder="Валюта"
            style="width: 150px"
            @change="changeUserCurrency(value)"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="flex items-center gap-4">
        <span>Назаров Максим</span>
        <el-avatar />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {useOverallPortfolio} from '~/store/useOverallPortfolio'
import {currency} from '~/utils/Currency'
import MoneyComponent from '~/components/presentation/MoneyComponent.vue'
import {storeToRefs} from 'pinia'
import {useSettingsUser} from '~/store/useSettingsUser'

const {overallPortfolio} = storeToRefs(useOverallPortfolio())
const {convertOverallPortfolio} = useOverallPortfolio()
const {changeUserCurrency} = useSettingsUser()

const options = computed(() => {
  return currency.map(item => {
    return {
      label: item.label,
      value: item.value
    }
  })
})

const { userCurrency } = storeToRefs(useSettingsUser())

watch(userCurrency, (newValue) => {
  convertOverallPortfolio(newValue)
})

const value = ref(options.value[2].value)

</script>

<style scoped>
.glass-header {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  border-radius: 8px;
  top: 0;
  z-index: 50;
  padding: 0 1rem; /* добавьте отступы по бокам */
}

.el-select, .el-avatar {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>