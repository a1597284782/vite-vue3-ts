<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/">Hello</router-link>
    -
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>