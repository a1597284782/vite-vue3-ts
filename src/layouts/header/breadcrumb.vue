<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in levelList" :key="item.path">
      <span>
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationMatched } from 'vue-router'

export default defineComponent({
  name: 'BreadcrumbVue',
  setup() {
    const route = useRoute()

    const levelList = ref<RouteLocationMatched[]>([])

    const getBreadcrumb = () => {
      // 只显示带有meta.title的路由
      const matched = route.matched.filter(
        (item) => item.meta && item.meta.title
      )

      levelList.value = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
    }

    getBreadcrumb()

    watch(
      () => route.path,
      () => {
        getBreadcrumb()
      }
    )

    return {
      levelList
    }
  }
})
</script>

<style scoped></style>
