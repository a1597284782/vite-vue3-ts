<template>
  <div>
    <el-button @click="visible = true">
      Open Dialog with customized header
    </el-button>

    <el-dialog v-model="visible" width="80%">
      <template #header>
        <span class="el-dialog_title">1111</span>
        <div style="float: right; margin-right: 50px">
          <el-button color="#1890FF" style="color: white" @click="submit()">
            保存
          </el-button>
          <el-button @click="submit">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MyQuestion',
  setup() {
    const visible = ref(false)

    const submit = () => {
      console.log(1)
    }

    return {
      visible,
      submit
    }
  }
})
</script>

<style scoped></style>
