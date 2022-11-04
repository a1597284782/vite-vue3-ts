<template>
  <div />
</template>

<script lang="ts">
export default {
  name: 'RedirectVue'
}
</script>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const { params, query } = route
const { path } = params
router.replace({ path: '/' + path, query })
</script>

<style scoped></style>
