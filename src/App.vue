<template>
  <el-config-provider :size="size">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    // 控制全局组件大小
    const size = computed(() => store.state?.app.ElementPlusSize)

    return {
      size
    }
  }
})
</script>

<style lang="scss" scoped></style>
