<template>
  <div class="login-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterLoginsPages',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #2d3a4b;
}
</style>
