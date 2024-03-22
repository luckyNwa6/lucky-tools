<template>
  <div>
    i18测试
    <el-input v-model="filterText" :placeholder="$t('role')" />
    <exitButton />
  </div>
</template>

<script setup>
const filterText = ref('')
</script>

<style lang="scss" scoped></style>
