<template>
  <div class="flex w-screen h-screen">
    <AppAsideBar/>
    <div class="w-full px-6">
      <AppHeader/>
      <slot />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>/

<style scoped>

</style>