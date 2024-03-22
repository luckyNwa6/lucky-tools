<template>
  <div>
    <el-button :plain="true" @click="exitLogin">注销</el-button>
  </div>
</template>

<script setup>
import useExitLogin from '@/hooks/useExitLogin'
const { exitLogin } = useExitLogin()
</script>

<style lang="scss" scoped></style>
