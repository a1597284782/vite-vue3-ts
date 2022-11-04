<template>
  <el-aside class="aside-bar" :style="{ width: isCollapse ? '64px' : '200px' }">
    <el-scrollbar>
      <el-menu
        class="sider"
        :collapse="isCollapse"
        background-color="#001529"
        :default-active="activeMenu"
        text-color="#fff"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import sidebarItem from './sidebar-item.vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  components: {
    sidebarItem
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const routes = useRouter().options.routes

    const activeMenu = computed(() => {
      const route = useRoute()
      const { path } = route
      return path
    })

    return {
      routes,
      activeMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.sider {
  border: none;
}
.aside-bar {
  background-color: #001529;
}
</style>
