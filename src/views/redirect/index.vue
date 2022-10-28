<script lang="ts">
import { defineComponent, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'RedirectVue',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const { params, query } = route
    const { path } = params
    router.replace({ path: '/' + path, query })

    return {}
  },
  render() {
    return h('p')
  }
})
</script>

<style scoped></style>
