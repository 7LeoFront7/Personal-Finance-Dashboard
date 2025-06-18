<template>
  <header class="flex items-center h-16 justify-between w-full glass-header">
    <!-- остальное содержимое без изменений -->
    <NuxtLink class="font-bold text-primary text-2xl" to="/">Personal Finance Dashboard</NuxtLink>
    <div class="flex items-center gap-4">
      Общий счёт: 123132.32 руб
      <el-select v-model="value" placeholder="Валюта" style="width: 150px">
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
  </header>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref('')

const options = [
  { value: 'USD', label: '$ Доллар США (USD)' },
  { value: 'EUR', label: '€ Евро (EUR)' },
  { value: 'RUB', label: '₽ Российский рубль (RUB)' },
  { value: 'JPY', label: '¥ Японская йена (JPY)' },
  { value: 'GBP', label: '£ Британский фунт (GBP)' },
]
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