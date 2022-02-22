<template>
  <div>
    <div class="scss">Scss</div>
    <div>{{ store.state.count }}</div>
    <button type="button" @click="add">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const add = () => {
      store.commit('increment')
    }
    return {
      store,
      add
    }
  }
})
</script>

<style lang="scss" scoped>
.scss {
  color: red;
}
</style>