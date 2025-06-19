<template>
  <el-menu
      :collapse="isCollapse"
      :default-active="route.path"
      class="custom-sidebar el-menu-vertical-demo !h-full"
      background-color="#fff"
      text-color="#000"
      active-text-color="#1d4ed8"
      @click.self="toggleSideBar"
  >
    <el-menu-item
        v-for="el in sideBar.user"
        :key="el.route"
        :index="el.route"
        class="side-element"
        @click="router.push(el.route)"
    >
      <el-icon>
        <Icon :name="el.icon" />
      </el-icon>
      <template #title>
        {{ el.label }}
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const isCollapse = ref(true)

interface sideBar {
  user: itemSideBar[]
  admin: itemSideBar[]
}
interface itemSideBar {
  label: string,
  icon: string,
  route: string,
}

const route = useRoute()
const router = useRouter()

const sideBar = ref({
  user: [
    { label: 'Главная', route: '/', icon: 'material-symbols:home' },
    { label: 'Транзакции',route: '/transaction', icon: 'material-symbols:attach-money' },
    { label: 'Статистика',route: '/statistic', icon: 'material-symbols:insert-chart-outline' },
    { label: 'Профиль', route: '/profile',icon: 'material-symbols:account-box' },
  ]
})

const toggleSideBar = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.custom-sidebar .el-menu-item:hover {
  background-color: #e0ecff !important;
  color: #1d4ed8 !important;
}
</style>