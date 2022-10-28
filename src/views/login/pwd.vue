<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    class="login-form"
    auto-complete="on"
    label-position="left"
    size="large"
  >
    <div class="title-container">
      <h3 class="title">登录</h3>
    </div>
    <el-form-item label="" prop="username">
      <el-input
        v-model="loginForm.username"
        placeholder="账号"
        type="text"
        tabindex="1"
      />
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input
        v-model="loginForm.password"
        placeholder="密码"
        type="password"
        tabindex="2"
        @keyup.enter="handleLogin"
      />
    </el-form-item>
    <el-button
      :loading="loading"
      type="primary"
      style="width: 100%; margin-bottom: 30px"
      @click="handleLogin"
    >
      登录
    </el-button>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  name: 'LoginPages',
  setup() {
    const loginForm = reactive({
      username: '',
      password: ''
    })
    const loginFormRef = ref<FormInstance>()

    const loginRules = reactive<FormRules>({
      username: [
        {
          // required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        }
      ],
      password: [
        {
          // required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        }
      ]
    })

    // 登录
    const loading = ref(false)
    const router = useRouter()
    const handleLogin = () => {
      router.push({ name: 'Home' })
    }

    return {
      loginForm,
      loginRules,
      loginFormRef,
      loading,
      handleLogin
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form {
  position: relative;
  width: 500px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
