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
import AppAsideBar from '~/layouts/AppAsideBar.vue'
import AppHeader from '~/layouts/AppHeader.vue'
import AppFooter from '~/layouts/AppFooter.vue'
</script>/

<style scoped>

</style>