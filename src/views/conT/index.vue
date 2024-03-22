<template>
  <div>
    <exitButton />
    <hr />
    默认是英文的，需要main那修改配置
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />
    <hr />
    这是elementui组件按需自动导入
    <el-button :plain="true" @click="open">Show message</el-button>
    <hr />
    <TestA v-model:value="tempData" />

    <el-button @click="testData">测试值的变化</el-button>
  </div>
</template>

<script setup>
let tempData = ref('111')
const testData = () => {
  tempData.value = '22222'
}
const open = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>

<style lang="scss" scoped></style>
