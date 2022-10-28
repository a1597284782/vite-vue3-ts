<template>
  <div class="common-layout">
    <el-container>
      <SiderBar :is-collapse="isCollapse" />
      <el-container class="flex-direction-column">
        <headerVue @switch-to="switchTo" />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import headerVue from './header/header.vue'
import SiderBar from './sider/sider-bar.vue'

export default defineComponent({
  name: 'LayoutsDefault',
  components: {
    headerVue,
    SiderBar
  },
  setup() {
    const isCollapse = ref(false)

    const switchTo = () => {
      isCollapse.value = !isCollapse.value
    }

    return {
      switchTo,
      isCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.flex-direction-column {
  flex-direction: column;
}
</style>
