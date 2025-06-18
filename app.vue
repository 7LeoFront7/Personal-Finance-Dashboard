<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
console.log(runTimeConfig)
</script>
