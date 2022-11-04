<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <el-icon :size="20" class="mr-10 cursor-pointer"><Tools /></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in sizeOptions"
          :key="item.value"
          :disabled="size === item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useStore from '@/store'

export default defineComponent({
  setup() {
    const { app } = useStore()

    const sizeOptions = ref([
      { label: '大号', value: 'large' },
      { label: '默认', value: 'default' },
      { label: '小号', value: 'small' }
    ])

    const size = ref('')
    size.value = localStorage.getItem('size') || 'default'
    app.setSize(size.value)

    const router = useRouter()
    const route = useRoute()

    const refreshView = () => {
      const { fullPath } = route
      router.replace({ path: '/redirect' + fullPath })
    }

    // 改变全局组件大小
    const handleSetSize = (val: string) => {
      size.value = val
      app.setSize(val)
      localStorage.setItem('size', val)
      refreshView()
    }

    return {
      sizeOptions,
      handleSetSize,
      size
    }
  }
})
</script>

<style scoped></style>
