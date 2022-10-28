<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'LintVue',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isUrl = computed(() => {
      return isExternal(props.to)
    })

    const type = computed(() => {
      if (isUrl.value) {
        return 'a'
      }
      return 'router-link'
    })

    const linkProps = (to: string) => {
      if (isUrl.value) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }

    return {
      isUrl,
      type,
      linkProps
    }
  }
})
</script>

<style scoped></style>
