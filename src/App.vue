<template>
  <el-config-provider :size="size">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import useStore from '@/store'

const { app } = useStore()

// 控制全局组件大小
const size = computed(() => app.ElementPlusSize)
</script>

<style lang="scss" scoped></style>
