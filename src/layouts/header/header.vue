<template>
  <el-header class="header">
    <div class="header-top">
      <el-icon :size="20" class="mr-10 cursor-pointer" @click="switchTo">
        <component :is="isCollapse ? 'Expand' : 'Fold'" />
      </el-icon>

      <breadcrumb class="mr-auto" />

      <el-tooltip content="布局大小设置" effect="dark" placement="bottom">
        <SizeSelect />
      </el-tooltip>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 面包屑
import breadcrumb from './breadcrumb.vue'
// 布局大小设置
import SizeSelect from './size-select.vue'

export default defineComponent({
  name: 'HeaderIndex',
  components: {
    breadcrumb,
    SizeSelect
  },
  emits: ['switchTo'],
  setup(props, { emit }) {
    const isCollapse = ref(false)

    const switchTo = () => {
      isCollapse.value = !isCollapse.value
      emit('switchTo', isCollapse.value)
    }

    return {
      switchTo,
      isCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #eee;
}
.header-top {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
}
.mr-10 {
  margin-right: 10px;
}
.mr-auto {
  margin-right: auto;
}
</style>
