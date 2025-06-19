<template>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>{{props.title}}</span>
      </div>
    </template>
    <p class="text item">{{ props.value }}</p>
  </el-card>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string,
    value: number,
  }>()
</script>

<style scoped>

</style>